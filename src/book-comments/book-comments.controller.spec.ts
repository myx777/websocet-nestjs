import { Test, TestingModule } from '@nestjs/testing';
import { BookCommentsController } from './book-comments.controller';
import { BookCommentsService } from './book-comments.service';

describe('BookCommentsController', () => {
  let controller: BookCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookCommentsController],
      providers: [BookCommentsService],
    }).compile();

    controller = module.get<BookCommentsController>(BookCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
