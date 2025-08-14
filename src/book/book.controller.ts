import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { BookPartial } from './dto/book-partial.dto';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) { };

    @Get()
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: [BookDto],
    })
    findAll() {
        return this.bookService.findAll();
    }

    @Get(':id')
    @ApiCreatedResponse({
        description: 'The record has been successfully created.',
        type: BookDto,
    })
    findOne(@Param('id') id: string) {
        return this.bookService.findOne(+id);
    }

    @Post()
    @ApiBody({
        description: 'Book data',
        type: BookDto,
    })
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async create(@Body() book: BookPartial) {
        return this.bookService.create(book);
    }

    @Patch(':id')
    @ApiBody({
        description: 'Book data',
        type: BookDto,
    })
    update(@Param('id') id: string, @Body() book: BookPartial) {
        return this.bookService.update(+id, book);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.bookService.delete(+id);
    }


}

