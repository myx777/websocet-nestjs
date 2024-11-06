import { Injectable } from '@nestjs/common';
import { CreateBookCommentDto } from './dto/create-book-comment.dto';
import { UpdateBookCommentDto } from './dto/update-book-comment.dto';

@Injectable()
export class BookCommentsService {
  create(createBookCommentDto: CreateBookCommentDto) {
    return 'This action adds a new bookComment';
  }

  findAll() {
    return `This action returns all bookComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookComment`;
  }

  update(id: number, updateBookCommentDto: UpdateBookCommentDto) {
    return `This action updates a #${id} bookComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookComment`;
  }
}
