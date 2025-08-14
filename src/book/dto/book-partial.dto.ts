import { BookDto } from "./book.dto";
import { PartialType } from '@nestjs/mapped-types';

export class BookPartial extends PartialType(BookDto) { }