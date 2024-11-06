/**
 * DTO для создания комментария к книге.
 * Этот класс представляет структуру данных для отправки информации о новом комментарии.
 */
export class CreateBookCommentDto {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
}
