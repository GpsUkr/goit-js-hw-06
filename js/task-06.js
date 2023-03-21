const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputLength = event.target.dataset.length;
    const inputValue = event.target.value.trim().length;

    if (inputValue === Number(inputLength)) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
}

/* Основні кроки:

Отримуємо елемент інпуту за допомогою document.querySelector.
Додаємо слухача події blur до інпуту, який викличе функцію onInputBlur при втраті інпутом фокусу.
В функції onInputBlur отримуємо значення атрибуту data - length та введене значення інпуту, очищаємо його від пробілів та розраховуємо його довжину.
Якщо довжина введеного тексту дорівнює заданому значенню, додаємо клас valid та видаляємо клас invalid.В іншому випадку додаємо клас invalid та видаляємо клас valid. */