const inputFontSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputFontSize.addEventListener('input', () => {
    spanText.style.fontSize = `${inputFontSize.value}px`;
});


//У цьому коді ми отримуємо посилання на елементи input#font - size - control і span#text за допомогою методу querySelector.Далі ми додаємо слухача події input до input#font - size - control, щоб відслідковувати зміну його значення.Кожен раз, коли значення input змінюється, ми оновлюємо інлайн - стиль елемента span#text з використанням поточного значення input#font - size - control.