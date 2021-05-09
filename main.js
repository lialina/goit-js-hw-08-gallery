import images from './gallery-items.js';

const galleryList = document.querySelector('.js-gallery');

let galleryElements = images.map(image => {
    return `<a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`
}).join('');

galleryList.insertAdjacentHTML('beforeend', galleryElements);

const lightboxModal = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeIcon = document.querySelector('.lightbox__button');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

galleryList.addEventListener('click', onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();
  
  const target = event.target;

  if (!target.classList.contains('gallery__image')) {
    return;
  };

  addClassIsOpenOnLightboxModal();
  setlightboxImageSrc(target);

  closeIcon.addEventListener('click', onCloseIconClick);

  lightboxOverlay.addEventListener('click', onLightboxOverlayClick);

  document.addEventListener('keyup', function(event) {
    if (!event.key == 'Escape') {
      return;
    };
    
    removeClassIsOpenFromLightboxModal();
    cleanlightboxImageSrc();
  });
};

function addClassIsOpenOnLightboxModal() {
  lightboxModal.classList.add("is-open");
};

function setlightboxImageSrc(target) {
  lightboxImage.src = target.dataset.source;
}

function onCloseIconClick() {
  removeClassIsOpenFromLightboxModal();
  cleanlightboxImageSrc();
};

function removeClassIsOpenFromLightboxModal() {
  lightboxModal.classList.remove("is-open");
};

function cleanlightboxImageSrc() {
  lightboxImage.src = '';
};

function onLightboxOverlayClick() {
  removeClassIsOpenFromLightboxModal();
  cleanlightboxImageSrc();
}