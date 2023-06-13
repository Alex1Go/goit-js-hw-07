import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);

galleryEl.insertAdjacentHTML('beforeend', markup.join(''));
galleryEl.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    const currentImg = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${currentImg}"  width="800" height="600"> `);

    instance.show(); 
};
// ------------------------
// window.addEventListener('keydown', onKeydown),
// function onKeydown(evt) {
//     if (evt.code === "Escape") {
//         instance.close();
//     }
// }
// -----------------------
//          {
//         onShow: (instance) => {
//          const closeEl = evt.code === "Escape"
//         instance.element().querySelector('closeEl').onclick = instance.close
//     }
// }
// ----------------------------------
//     instance.show(() => {
//         const closeEl = evt.code === "Escape"
// 	instance.element().querySelector( 'closeEl' ).close();
// });