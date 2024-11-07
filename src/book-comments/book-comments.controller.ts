import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookCommentsService } from './book-comments.service';
import { CreateBookCommentDto } from './dto/create-book-comment.dto';
import { UpdateBookCommentDto } from './dto/update-book-comment.dto';

@Controller('book-comments')
export class BookCommentsController {
  constructor(private readonly bookCommentsService: BookCommentsService) {}

  @Post()
  create(@Body() createBookCommentDto: CreateBookCommentDto) {
    return this.bookCommentsService.create(createBookCommentDto);
  }

  @Get()
  findAll() {
    return this.bookCommentsService.findAll();
  }

  @Get(':bookId')
  indAllBookComment(@Param('bookId') bookId: string) {
    return this.bookCommentsService.findOne(+bookId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookCommentDto: UpdateBookCommentDto) {
    return this.bookCommentsService.update(+id, updateBookCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookCommentsService.remove(+id);
  }
}
