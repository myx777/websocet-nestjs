import { Module } from '@nestjs/common';
import { BookCommentsGateway } from './book-comments/book-comments.gateway';

@Module({
  providers: [BookCommentsGateway]
})
export class BookCommentsGatewayModule {}
