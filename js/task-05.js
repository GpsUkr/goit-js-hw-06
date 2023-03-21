const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});


//Цей скрипт знаходить елементи інпуту та спана за допомогою document.querySelector().Далі додає до інпуту слухача події "input", який відбувається при кожному введенні символу в поле.Коли відбувається подія "input", текст з інпуту вибирається за допомогою.value, і його значення встановлюється в текстове вмістення спана за допомогою.textContent.Якщо текст з інпуту порожній(або складається лише з пробілів), то замість нього встановлюється рядок "Anonymous".