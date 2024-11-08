import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BookCommentsService } from './book-comments.service';

/**
 * Контроллер для управления комментариями к книгам.
 */
@Controller('book-comments')
export class BookCommentsController {
  constructor(private readonly bookCommentsService: BookCommentsService) {}

  /**
   * Эндпоинт для получения всех комментариев к указанной книге.
   *
   * @param {number} bookId - Идентификатор книги.
   * @returns {Promise<BookCommentModel[]>} - Массив комментариев.
   */
  @Get(':bookId')
  async findAllBookComment(@Param('bookId') bookId: number) {
    return await this.bookCommentsService.findAllBookComment(bookId);
  }

  /**
   * Эндпоинт для создания комментария к книге.
   *
   * @param {any} body - Тело запроса с текстом комментария.
   * @param {number} bookId - Идентификатор книги.
   * @returns {Promise<BookCommentModel>} - Добавленный комментарий.
   */
  @Post(':bookId/create')
  async createBookComment(
    @Body() body: { comment: string },
    @Param('bookId') bookId: number,
  ) {
    return await this.bookCommentsService.createBookComment(
      bookId,
      body.comment,
    );
  }
}
