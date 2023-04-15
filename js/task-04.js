const counterValue = document.querySelector("#value");
let currentValue = 0;

const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");

incrementBtn.addEventListener("click", () => {
    currentValue += 1;
    counterValue.textContent = currentValue;
});

decrementBtn.addEventListener("click", () => {
    currentValue -= 1;
    counterValue.textContent = currentValue;
});


//Цей скрипт знаходить елемент лічильника за допомогою document.querySelector(), ініціалізує змінну currentValue значенням 0. Далі знаходить кнопки за допомогою document.querySelector() і додає до них слухачів подій "click", які збільшують або зменшують currentValue і оновлюють його значення в DOM за допомогою.textContent.