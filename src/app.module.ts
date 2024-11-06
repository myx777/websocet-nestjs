import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookCommentsService } from './book-comments/book-comments.service';
import { BookCommentsModule } from './book-comments/book-comments.module';
import { BookCommentsModule } from './book-comments/book-comments.module';

@Module({
  imports: [BookCommentsModule],
  controllers: [AppController],
  providers: [AppService, BookCommentsService],
})
export class AppModule {}
