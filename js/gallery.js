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
      data-index="${images.indexOf(image)}"
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
  console.log(target);

  if (!target.classList.contains('gallery__image')) {
    return;
  };

  addClassIsOpenOnLightboxModal();
  setlightboxImageSrcAndAlt(target);

  closeIcon.addEventListener('click', onCloseIconClick);

  lightboxOverlay.addEventListener('click', onLightboxOverlayClick);

  document.addEventListener('keyup', function(event) {
    if (event.key == 'Escape') {
      removeClassIsOpenFromLightboxModal();
      cleanlightboxImageSrcAndAlt();
    };

    return;
  });
};

function addClassIsOpenOnLightboxModal() {
  lightboxModal.classList.add("is-open");
};

function setlightboxImageSrcAndAlt(target) {
  lightboxImage.src = target.dataset.source;
  lightboxImage.alt = target.alt;
}

function onCloseIconClick() {
  removeClassIsOpenFromLightboxModal();
  cleanlightboxImageSrcAndAlt();
};

function removeClassIsOpenFromLightboxModal() {
  lightboxModal.classList.remove("is-open");
};

function cleanlightboxImageSrcAndAlt() {
  lightboxImage.src = '';
  lightboxImage.alt = '';
};

function onLightboxOverlayClick() {
  removeClassIsOpenFromLightboxModal();
  cleanlightboxImageSrcAndAlt();
}