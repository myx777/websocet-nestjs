import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookCommentsService } from './book-comments/book-comments.service';
import { BookCommentsModule } from './book-comments/book-comments.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCommentModel } from './book-comments/entities/book-comment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BookCommentsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url:
        `${process.env.DB_COMMENTS}` ||
        'mongodb://root:root@localhost:27017/testComments',
      useUnifiedTopology: true,
      synchronize: true, // только на этапе разработке
      entities: [BookCommentModel],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BookCommentsService],
})
export class AppModule {}
