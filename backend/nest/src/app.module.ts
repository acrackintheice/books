import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/model/Book';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'books',
      entities: [Book],
      synchronize: true,
    }), 
    BookModule
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class AppModule {}
