function validateInput(input) {
    const requiredLength = input.dataset.length;
    const enteredValue = input.value;

    if (enteredValue.length === +requiredLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
    validateInput(inputRef);
});

/* Основні кроки:

Отримуємо елемент інпуту за допомогою document.querySelector.
Додаємо слухача події blur до інпуту, який викличе функцію onInputBlur при втраті інпутом фокусу.
В функції onInputBlur отримуємо значення атрибуту data - length та введене значення інпуту, очищаємо його від пробілів та розраховуємо його довжину.
Якщо довжина введеного тексту дорівнює заданому значенню, додаємо клас valid та видаляємо клас invalid.В іншому випадку додаємо клас invalid та видаляємо клас valid. */