import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookCommentsService } from './book-comments.service';

@Controller('book-comments')
export class BookCommentsController {
  constructor(private readonly bookCommentsService: BookCommentsService) {}

  @Get(':bookId')
  async indAllBookComment(@Param('bookId') bookId: number) {
    return await this.bookCommentsService.findAllBookComment(bookId);
  }
}
