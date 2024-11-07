import { Column, Entity, ObjectIdColumn } from 'typeorm';

/**
 *  ПРедставляет собой структуру книги в БД монго
 * 
 * @class Book
 */
@Entity()
export class Book {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  year: number;

  @Column()
  description: string;
}
