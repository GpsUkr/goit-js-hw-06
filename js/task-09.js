const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//Этот скрипт добавляет обработчик события на кнопку "Change color", который вызывает функцию getRandomHexColor(), которая генерирует случайный цвет в шестнадцатеричном формате.Этот цвет присваивается свойству background - color у элемента body, а значение цвета выводится в span.
