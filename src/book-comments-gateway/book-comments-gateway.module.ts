import { Module } from '@nestjs/common';
import { BookCommentsGateway } from './book-comments/book-comments.gateway';
import { BookCommentsModule } from 'src/book-comments/book-comments.module';

@Module({
  imports: [BookCommentsModule],
  providers: [BookCommentsGateway]
})
export class BookCommentsGatewayModule {}
