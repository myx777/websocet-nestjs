import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookCommentModel } from './entities/book-comment.entity';

@Injectable()
export class BookCommentsService {
  /**
   * Создает экземпляр сервиса комментариев к книге.
   * @param {Repository<BookCommentModel>} commentRepository - Репозиторий для работы с комментариями.
   */
  constructor(
    @InjectRepository(BookCommentModel)
    private commentRepository: Repository<BookCommentModel>,
  ) {}

  /**
   * Возвращает все комментарии, связанные с определенной книгой.
   * @param {number} bookId - Идентификатор книги.
   * @returns {Promise<BookCommentModel[]>} - Промис, который разрешается в массив комментариев.
   * @throws {Error} Если комментарии не найдены.
   */
  async findAllBookComment(bookId: number): Promise<BookCommentModel[]> {
    const comments = await this.commentRepository.find({ where: { bookId } });

    if (!comments || comments.length === 0) {
      throw new Error('No comments found');
    }
    return comments;
  }
}
