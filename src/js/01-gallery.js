import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

const renderlist = (arr) => arr.map(item => (`<li data-id=${arr.indexOf(item)} class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} alt=${item.description}/></a></li>`)).join("");

galleryContainer.insertAdjacentHTML("beforeend", renderlist(galleryItems))

const modalInstance = new SimpleLightbox('.gallery__link', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
