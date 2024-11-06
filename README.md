**Выполните задания.**

**Задание 1.**

Установите пакет @nestjs/websockets.

**Задание 2.**

Создайте модуль для работы с комментариями.

1. Создайте модель BookCommentModel.
2. Создайте сервис BookCommentsService для работы с BookCommentModel.
3. Реализуйте CRUD для работы BookCommentModel и метод findAllBookComment(bookId).

Модель BookCommentModel должна хранить: 

```js
{
    id: "number"
    bookId: "number"
    comment: "string"  
}

```

решил использовать TypeOrm