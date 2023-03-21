// Отримуємо список інгредієнтів
const ingredientsList = document.querySelector('#ingredients');

// Отримуємо масив інгредієнтів
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створюємо елемент <li> для кожного інгредієнту і додаємо його до списку
ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  ingredientsList.appendChild(li);
});

