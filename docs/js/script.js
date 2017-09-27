var link = document.querySelector(".feedback"); /* Кнопка "Напишите нам" */
var modal = document.querySelector(".modal-content-contact-us"); /* Модальное окно Обратной связи */
var close = document.querySelector(".modal-content-close"); /* Кнопка закрытия модального окна */

/* Открыть всплывающее окно */
link.addEventListener("click", function(event){
    event.preventDefault(); /* Отмена действия по-умолчанию */
    modal.classList.add("visible"); /* Добавить класс .visible для объекта MODAL */
});

/* Закрыть всплывающее окно */
close.addEventListener("click", function(event){
    event.preventDefault(); /* Отмена действия по-умолчанию */
    modal.classList.remove("visible"); /* удалить класс .visible для объекта MODAL */
});