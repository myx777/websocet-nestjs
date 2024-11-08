import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { BookCommentsService } from 'src/book-comments/book-comments.service';

/**
 * WebSocket Gateway для работы с комментариями к книге.
 * Обеспечивает получение и добавление комментариев в реальном времени.
 */
@WebSocketGateway({ cors: true })
export class BookCommentsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly bookCommentsService: BookCommentsService) {}

  /**
   * Обработчик WebSocket-события для получения всех комментариев к определенной книге.
   *
   * @param {number} bookId - Идентификатор книги.
   * @returns {Promise<any>} - Промис с массивом комментариев.
   */
  @SubscribeMessage('getAllComments')
  async getAllComments(@MessageBody('bookId') bookId: number): Promise<any> {
    const comments = await this.bookCommentsService.findAllBookComment(bookId);
    return comments;
  }

  /**
   * Обработчик WebSocket-события для добавления нового комментария.
   *
   * @param {number} bookId - Идентификатор книги.
   * @param {string} comment - Текст комментария.
   * @param {Socket} client - Текущий клиент WebSocket-соединения.
   * @returns {Promise<any>} - Промис с добавленным комментарием.
   */
  @SubscribeMessage('addComment')
  async addComment(
    @MessageBody('bookId') bookId: number,
    @MessageBody('comment') comment: string,
    @ConnectedSocket() client: Socket,
  ): Promise<any> {
    const newComment = await this.bookCommentsService.createBookComment(
      bookId,
      comment,
    );
    this.server.emit('newComment', newComment);
    return newComment;
  }
}
