/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';


export class BookDto {

    @IsInt()
    @ApiProperty({ required: false, readOnly: true, description: 'A Uniques ID' })
    id: number;

    @IsString()
    @ApiProperty({ required: true, description: 'Unique identifier for the book' })
    title: string;

    @IsString()
    @ApiProperty({ required: true, description: 'Name of the Writer' })
    author: string;

    @IsBoolean()
    @ApiProperty({ required: false, description: 'Has read by me' })
    isRead: boolean;

    @IsString()
    summary: string;

    @IsDate()
    @ApiProperty({ required: false, readOnly: true, description: 'Date on which the Book is added to collection' })
    createdAt: Date;
}