import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookCommentModel } from './entities/book-comment.entity';

/**
 * Сервис для работы с комментариями к книгам.
 */
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

  /**
   * Создает новый комментарий к книге.
   *
   * @param {number} bookId - Идентификатор книги.
   * @param {string} comment - Текст комментария.
   * @returns {Promise<BookCommentModel>} - Промис с добавленным комментарием.
   */
  async createBookComment(
    bookId: number,
    comment: string,
  ): Promise<BookCommentModel> {
    const newComment = this.commentRepository.create({ bookId, comment });
    return await this.commentRepository.save(newComment);
  }
}
