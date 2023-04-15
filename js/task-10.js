const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

let boxesAmount = 0;

const createBoxes = (amount) => {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  refs.boxesContainer.append(...boxes);
  boxesAmount += amount;
};

const destroyBoxes = () => {
  refs.boxesContainer.innerHTML = '';
  boxesAmount = 0;
};

const handleCreateBtnClick = () => {
  const amount = Number(refs.input.value);
  createBoxes(amount);
  refs.input.value = '';
};

const handleDestroyBtnClick = () => {
  destroyBoxes();
};

refs.createBtn.addEventListener('click', handleCreateBtnClick);
refs.destroyBtn.addEventListener('click', handleDestroyBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


/* Сначала мы получаем ссылки на элементы управления и контейнер, в котором будут находиться создаваемые блоки.Далее мы создаем переменную для хранения количества созданных блоков и функцию createBoxes, которая на основе переданного количества генерирует и добавляет в контейнер нужное количество блоков.

Функция destroyBoxes очищает контейнер и сбрасывает количество созданных блоков.

Затем мы создаем обработчики кликов на кнопки создания и удаления блоков и привязываем их к соответствующим кнопкам.

И наконец, мы создаем функцию getRandomHexColor для генерации случайных цветов в формате HEX. */

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const emailInput = form.elements.email.value;
//     const passwordInput = form.elements.password.value;

//     if (emailInput.value === '' || passwordInput.value === '') {
//         alert('Please fill in all fields');
//         return;
//     }

//     const formData = {
//         email: emailInput.value,
//         password: passwordInput.value,
//     };

//     console.log(formData);
//     form.reset();
// }

// const inputEl = document.querySelector('#validation-input');

// inputEl.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {
//     const inputLength = event.target.dataset.length;
//     const inputValue = event.target.value.trim().length;

//     if (inputValue === Number(inputLength)) {
//         event.target.classList.add('valid');
//         event.target.classList.remove('invalid');
//     } else {
//         event.target.classList.add('invalid');
//         event.target.classList.remove('valid');
//     }
// }