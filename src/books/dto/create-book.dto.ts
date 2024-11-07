/**
 * DTO для создания книги.
 * Этот класс представляет структуру данных, необходимых для создания новой записи книги.
 *
 * @class CreateBookDto
 */
export class CreateBookDto {
    readonly title: string;
    readonly author: string;
    readonly year: number;
    readonly description: string;

}
