import { Body } from '@nestjs/common';
import { Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { BookService } from './book.service';
import { Book } from './model/Book';

@Controller('api/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // @Get()
  // getBook(@Param('id') id : string): string {
  //   return this.bookService.getBook(id);
  // }

  @Get()
  async getBooks(): Promise<Book[]> {
    return await this.bookService.getAllBooks();
  }

  @Delete(':id')
  async deleteBook(@Param('id') id : number) : Promise<DeleteResult> {
    return await this.bookService.deleteBook(id);
  }

  @Post()
  @HttpCode(201)
  async createBook(@Body() book : Book) : Promise<Book> {
    return await this.bookService.createBook(book);
  }

  @Post('many')
  @HttpCode(201)
  async createBooks(@Body() books : Book[]) : Promise<Book[]> {
    return await this.bookService.createBooks(books);
  }
}
