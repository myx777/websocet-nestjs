import { PartialType } from '@nestjs/mapped-types';
import { CreateBookCommentDto } from './create-book-comment.dto';

/**
 * DTO для обновления комментария к книге.
 * Этот класс расширяет `CreateBookCommentDto` и добавляет поле для указания времени обновления комментария.
 */
export class UpdateBookCommentDto extends PartialType(CreateBookCommentDto) {
    readonly updated_at?: Date;
}
