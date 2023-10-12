export function galleryCreate(arr) {
  return arr
    .map(
      ({ description, original, preview }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
         `
    )
    .join('');
}
