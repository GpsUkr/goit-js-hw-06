const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

const imagesMarkup = images.map((image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>
`).join("");

gallery.insertAdjacentHTML("beforeend", imagesMarkup);


/* Цей скрипт знаходить елемент з класом.gallery за допомогою document.querySelector(), створює розмітку зображень за допомогою методу.map(), який повертає масив рядків HTML, що представляють кожен елемент галереї.Далі рядки об'єднуються в один рядок за допомогою методу .join(""), і остаточна розмітка додається до DOM за допомогою методу .insertAdjacentHTML("beforeend", imagesMarkup).

Важливо звернути увагу на те, що рядок HTML містить класи.gallery - item і.gallery - image, які можна використовувати для оформлення галереї за допомогою CSS.


 */

