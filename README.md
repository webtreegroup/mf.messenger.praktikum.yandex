## Приложение - Мессенджер
## Прототипы и дизайн

Прототипы находятся в директории ui в корне проекта, в формате .png. При разработке использоваться сервис moqups.com. За основу был взят готовый дизайн от Yandex.

## Стили

На проекте используется SCSS, исходники находятся в папке `./src/style`

## Типизация

На проекте используется Typescript, файлы `.ts` находятся в папке `./src`.  
**ВАЖНО - поскольку на проекте не испльзуются различные сборщики, необходимо в конце путей импорта добавлять `.js`, чтобы все файлы правильно подхватывались системой, иначе при транспиляции ts в js на выходе будет ошибка 404 в браузере (он тупо не сможет найти файл вида `../Button`, но спокойно найдет `../Button.js`)**

## Тесты

На проекте используется Chai & Mocha, файлы `.spec.ts` находятся рядом с тестируемыми компонентами и частями приложения. Настройки для Mocha находятся в `.mocharc.json`, а также в `./testsSetup` Для запуска тестов необходимо набрать комманду: `npm run test`.  
Т.к. в качестве шаблонизатора на проекте были использованы шаблонные строки, то тесты для шаблонизатора пересекаются с тестами для Block, все вместе лежит тут `src\core\block\Block.spec.ts`. Тестами покрыто только самое необходимое (пара утилит не в счет, остальное будет покрываться между делом, по мере работы над проектом). При тестировании АПИ `src\core\api\api.spec.ts`, была необходимость использования `@ts-ignore` в нескольких местах. Обусловлено это тем, что на проекте не используются сборщики, с текущими настройками системы ts не видит модуль `chaiHttp`, но по факту все работает. В 4 спринте (в следующем) будет заюзан Webpack, этот момент будет решен.

## АПИ

Базовый модуль раположен тут `src\core\api\api.ts`, разбит на несколько специализированных сервисов, например `AuthAPI` из `src\core\api\auth.api.ts`. Обращение к АПИ идет через контейнерные компоненты (по типу React, отвечают за бизнес логику) вида `BlockContainer`, лежит рядом с соответствующим презентационными компонентом.

## Структура проекта

```
-- src  
  |-- components (общие компоненты)  
  |-- core (базовые компоненты)  
      |-- api (модуль отправки запросов)
      |-- block (базовый компонент и EvenBus)
      |-- router (модуль маршрутизации)
      |-- store (модуль хранилища)
  |-- pages (компоненты страниц)  
  |-- utils (полезные функции)  
  |-- style (файлы стилей)  
-- static (содержит статические .html, ифнографику, build .css и .js)  
-- ui (мокапы проекта)  
```

## Запуск приложения

`npm run start`

## Сборка приложения

`npm run build:all`

## Доступные страницы

- `/` - Домашняя страница (создана для удобства, с нее можно попасть на любую другую страницу)
- `/signin` - Вход
- `/signup` - Регистрация
- `/chats` - Список чатов (Поиск чата - одна и таже стр., будет реализована после добавления роутинга на проект)
- `/chats/:id` - Конкретный чат
- `/profile` - Профиль пользователя
- `/profile/edit` - Редактирование данных профиля
- `/profile/edit-pass` - Редактирование пароля профиля
- `/404` - 404 (по сути любой не известный маршрут)

Роутинг осуществляется на стороне клиента, все маршруты завернуты на стр. `./index.html`

## deploy
https://angry-kepler-31188c.netlify.app/
