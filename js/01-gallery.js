import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';

// Create gallery markup
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
  
    listItem.innerHTML = `
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    `;
  
    gallery.appendChild(listItem);
  });

// Event delegation to open modal
gallery.addEventListener('click', event => {
  event.preventDefault(); // Prevent default behavior of anchor tag

  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageUrl}" alt="Image">`);
    instance.show();
  }
});

console.log(galleryItems);