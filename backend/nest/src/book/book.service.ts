import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Book } from './model/Book';

@Injectable()
export class BookService {

  constructor (
    @InjectRepository(Book)
    private bookRepository: Repository<Book>
  ) {}

  getAllBooks() : Promise<Book[]> {
    return this.bookRepository.find();
  }
  deleteBook(id : number): Promise<DeleteResult> {
    return this.bookRepository.delete(id);
  }
  createBook(book: Book): Promise<Book> {
    return this.bookRepository.save(book)
  }
  createBooks(books: Book[]): Promise<Book[]> {
    return this.bookRepository.save(books)
  }
}
