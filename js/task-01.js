// Отримуємо список категорій
const categoriesList = document.querySelector('#categories');
// Отримуємо всі елементи li.item в цьому списку
const categoriesItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в списку
console.log(`Number of categories: ${categoriesItems.length}`);

// Проходимось по кожному елементу li.item
categoriesItems.forEach(item => {
    // Отримуємо заголовок елементу
    const categoryName = item.querySelector('h2').textContent;
    // Отримуємо всі елементи li в цій категорії
    const categoryElements = item.querySelectorAll('li');
    // Виводимо назву категорії та кількість елементів в ній
    console.log(`Category: ${categoryName}\nElements: ${categoryElements.length}`);
});
