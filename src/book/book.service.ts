import { Injectable, NotFoundException } from '@nestjs/common';
import sqlite3, { Database } from 'sqlite3';
import { BookPartial } from './dto/book-partial.dto';

@Injectable()
export class BookService {
    db: Database;

    constructor() {
        // Open DB normally
        this.db = new sqlite3.Database('./my_db.db', (err) => {
            if (err) {
                console.error('Error opening database ' + err.message);
                return;
            }
            console.log('Connected to the my_db database.');

        });
    }


    async findAll(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM books', [], (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }

    async findOne(id: number): Promise<JSON> {
        return new Promise((resolve, reject) => {
            this.db.get('SELECT * FROM books WHERE id = ?', [id], (err, row) => {
                if (err) reject(err);
                if (row === undefined) {
                    reject(new NotFoundException(`Book with id ${id} not found`));
                    return;
                }
                else resolve(row as JSON);
            });
        });
    }

    async create(book: BookPartial): Promise<any> {
        
        return new Promise((resolve, reject) => {
            this.db.run(
                'INSERT INTO books (title, author ) VALUES (?, ?)',
                [book.title, book.author],
                function (err) {
                    if (err) reject(err);
                    else resolve({ message: 'Book created successfully', bookId: this.lastID });
                },
            );
        });
    }

    async update(id: number, book: BookPartial): Promise<any> {

        const existingBook = await this.findOne(id);
        if (!existingBook) {
            throw new NotFoundException(`Book with id ${id} not found`);
        }
        // Dynamically build SET part of query
        const fields: String[] = [];
        const values: any[] = [];

        if (book.title) {
            fields.push('title = ?');
            values.push(book.title);
        }
        if (book.author) {
            fields.push('author = ?');
            values.push(book.author);
        }
        if (book.isRead === true) {
            fields.push('isRead = ?');
            values.push(book.isRead ? 1 : 0);
        }

        values.push(id);

        const query = `UPDATE books SET ${fields.join(', ')} WHERE id = ?`;

        return new Promise((resolve, reject) => {
            this.db.run(query, values, function (err) {
                if (err) reject(err);
                else resolve({ message: 'Book updated successfully', changes: this.changes });
            });
        });
    }

    async delete(id: number): Promise<any> {
        await this.findOne(id);
        return new Promise((resolve, reject) => {
            this.db.run('DELETE FROM books WHERE id = ?', [id], function (err) {
                if (err) reject(err);
                else resolve({ message: 'Book deleted successfully', changes: this.changes });
            });
        });
    }
}
