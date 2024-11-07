import { Column, Entity, ObjectIdColumn } from 'typeorm';

/**
 * Представляет комментарий к книге.
 *
 * @class BookComment
 */
@Entity()
export class BookComment {
  /**
   * Уникальный идентификатор комментария.
   *
   * @type {string}
   * @memberof BookComment
   */
  @ObjectIdColumn()
  id: string;

  /**
   * Имя пользователя, оставившего комментарий.
   *
   * @type {string}
   * @memberof BookComment
   */
  @Column()
  name: string;

  /**
   * Текст комментария.
   *
   * @type {string}
   * @memberof BookComment
   */
  @Column()
  description: string;

  /**
   * Дата создания комментария.
   * По умолчанию устанавливается текущее время.
   *
   * @type {Date}
   * @memberof BookComment
   */
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  /**
   * Дата обновления комментария.
   * Может быть пустой, если комментарий не обновлялся.
   *
   * @type {Date | undefined}
   * @memberof BookComment
   */
  @Column({ nullable: true })
  updated_at?: Date;
}
