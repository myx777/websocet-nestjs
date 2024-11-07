/**
 * DTO для создания комментария к книге.
 * Этот класс представляет структуру данных для отправки информации о новом комментарии.
 */
export class CreateBookCommentDto {
    readonly name: string;
    readonly description: string;
    readonly createdAt: Date;
}
