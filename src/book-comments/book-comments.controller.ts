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
  indAllBookComment(@Param('bookId') bookId: string) {
    return this.bookCommentsService.findOne(+bookId);
  }
}
