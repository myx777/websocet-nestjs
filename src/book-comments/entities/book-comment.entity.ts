import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Представляет комментарий к книге.
 *
 * @class BookCommentModel
 */
@Entity()
export class BookCommentModel {
  /**
   * Идентификатор книги, к которой относится комментарий.
   * Генерируется автоматически.
   *
   * @type {number}
   * @memberof BookCommentModel
   */
  @PrimaryGeneratedColumn()
  bookId: number;

  /**
   * Уникальный идентификатор комментария.
   * Генерируется автоматически.
   *
   * @type {number}
   * @memberof BookCommentModel
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Текст комментария.
   *
   * @type {string}
   * @memberof BookCommentModel
   */
  @Column()
  comment: string;
}
