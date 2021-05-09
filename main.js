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
  setlightboxImageSrcAndAlt(target);

  closeIcon.addEventListener('click', onCloseIconClick);

  lightboxOverlay.addEventListener('click', onLightboxOverlayClick);

  document.addEventListener('keyup', function(event) {
    if (!event.key == 'Escape') {
      return;
    };
    
    removeClassIsOpenFromLightboxModal();
    cleanlightboxImageSrcAndAlt();
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


// document.addEventListener('keyup', function(event) {
//     if (!event.key == 'ArrowRight') {
//       return;
//     };
    
//     cleanlightboxImageSrc();

//     // lightboxImage.src = 
//   });

//   document.addEventListener('keyup', function(event) {
//     if (!event.key == 'ArrowLeft') {
//       return;
//     };
    
//     cleanlightboxImageSrc();


//   });


// const galleryImages = document.querySelectorAll('.gallery__image');

// console.log(galleryImages[2]);

// for (let i = 0; i < galleryImages.length; i += 1) {
//   galleryImages[i] += 1;
//   console.log(galleryImages[i]);
// }

// let array = [];
// 2
//  image = new Image();
// 3
// image.src = "example.jpg"; // картинка закэширована, но ещё не в dom'е
// 4
// array.push(image);


// let array = document.getElementsByClassName('.gallery__image');

// console.log(array);



// const originalImagesArray = images.map(image => image.original.split(','));

// console.log(originalImagesArray[0]);