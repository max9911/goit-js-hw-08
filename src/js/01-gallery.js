import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryCreate } from '../templates/templategallery';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const selectors = {
  gal: document.querySelector('.gallery'),
};

// console.log(selectors.gal);
// console.log(galleryItems);

selectors.gal.insertAdjacentHTML('afterbegin', galleryCreate(galleryItems));
console.log(selectors.gal);
new SimpleLightbox('.gallery a');
