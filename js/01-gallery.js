import { galleryItems } from './gallery-items.js';
// Change code below this line

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

    document.addEventListener('keydown', onKeyPress);

    function onKeyPress(event) {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onKeyPress);
        }
    }

};

