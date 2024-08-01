[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/5EEINtAw)
# MusicBox

Твое задание - реализовать набор CRUD операций с использованием React и Redux. Сервер и компоненты для фронтенда уже написаны, тебе осталось только дописать недостающую логику.

## Release 0

Перейди в папку `server` и подготовь его к запуску. Тебе потребуется установить зависимости, заполнить переменные окружения `.env`, накатить базу данных и запустить сервер на 3000 порту. После запуска перейди на http://localhost:3000/api и ознакомься с API документацией по спецификации OpenAPI 3.1.0 в формате `Swagger`.

## Release 1

На главной странице `/` в части плеера `Выбор жанра` в выпадающем меню должен выводиться список всех жанров из базы данных.

## Release 2

После выбора определенного жанра из выпадающего меню должны появиться треки, соответствующие этому жанру. При выборе жанра должны подгружаться треки, связанные с этим жанром из базы данных.

## Release 3

При нажатии по иконке удаления трека, трек должен удаляться из базы данных и из списка треков на странице.

## Release 4

При нажатии на кнопку `Добавить трек` должен открываться модальный диалог с формой добавления нового трека. Id жанра должен соответствовать выбранному жанру в выпадающем меню.

## Release 5

При нажатии на иконку редактирования трека должен открываться модальный диалог с формой редактирования трека. После редактирования трека изменения должны сохраняться в базе данных и отображаться на странице.

## Release 6

При нажатии на иконку play трек должен появиться в основном окне плеера.

## Release 7

При нажатии на иконку `нравится` в объекте трека должно появиться свойство `likes: true`, и это должно выделить иконку цветом. Эта операция должна быть реализована на стороне клиента без участия сервера.

## Release 8

При нажатии на кнопки `<<>>` должны появляться следующие треки из списка треков выбранной категории.