import { Module } from '@nestjs/common';
import { BookCommentsService } from './book-comments.service';
import { BookCommentsController } from './book-comments.controller';

@Module({
  controllers: [BookCommentsController],
  providers: [BookCommentsService],
})
export class BookCommentsModule {}
