import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerRef = document.querySelector(".gallery");
const createMarkup = (ref) => {
  const images = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
      />
    </a>
  </li>`}).join('')

  ref.insertAdjacentHTML("afterbegin", images)
}

createMarkup(galleryContainerRef)

 new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
});
