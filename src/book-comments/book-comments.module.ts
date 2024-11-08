import { Module } from '@nestjs/common';
import { BookCommentsService } from './book-comments.service';
import { BookCommentsController } from './book-comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCommentModel } from './entities/book-comment.entity';

/**
 * Модуль для управления комментариями к книгам.
 *
 * @module BookCommentsModule
 */
@Module({
  /**
   * Импортирует `TypeOrmModule` с зарегистрированной сущностью `BookCommentModel`.
   * Это позволяет `BookCommentsService` взаимодействовать с базой данных через TypeORM.
   */
  imports: [TypeOrmModule.forFeature([BookCommentModel])],

  /**
   * Контроллеры, которые будут управлять HTTP-запросами для работы с комментариями к книгам.
   */
  controllers: [BookCommentsController],

  /**
   * Провайдеры, включающие `BookCommentsService`, который обрабатывает бизнес-логику комментариев к книгам.
   */
  providers: [BookCommentsService],
})
export class BookCommentsModule {}
