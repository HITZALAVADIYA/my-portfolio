const swiper = new Swiper('.swiper', {
    loop: true,
    mousewheel: true,
    slidesPerView: 4,
    speed: 1500,
    spaceBetween: 0,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev'
    }
  });

const detailModal = document.querySelector('#detail-modal');
const detailTitle = document.querySelector('#detail-modal-title');
const detailContent = document.querySelector('#detail-modal-content');
const detailButtons = document.querySelectorAll('.detail-btn');
const detailCloseTriggers = document.querySelectorAll('[data-close-details]');
const previewButtons = document.querySelectorAll('.explore-btn[data-preview-message]');
const imagePreviewButtons = document.querySelectorAll('.explore-btn[data-preview-images]');
const previewToast = document.querySelector('#preview-toast');
const imageModal = document.querySelector('#image-modal');
const imageModalTitle = document.querySelector('#image-modal-title');
const imageModalGallery = document.querySelector('#image-modal-gallery');
const imageModalCounter = document.querySelector('#image-modal-counter');
const imagePrevButton = document.querySelector('.image-modal__nav--prev');
const imageNextButton = document.querySelector('.image-modal__nav--next');
const imageModalCloseTriggers = document.querySelectorAll('[data-close-images]');
let previewToastTimeout;
let imageModalItems = [];
let currentImageIndex = 0;

const openDetailModal = (title, description) => {
  if (!detailModal || !detailTitle || !detailContent) return;

  detailTitle.textContent = title;
  detailContent.innerHTML = '';

  description
    .split('||')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .forEach((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      detailContent.appendChild(p);
    });

  detailModal.classList.add('is-open');
  detailModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeDetailModal = () => {
  if (!detailModal) return;

  detailModal.classList.remove('is-open');
  detailModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

const showPreviewToast = (message) => {
  if (!previewToast || !message) return;

  previewToast.textContent = message;
  previewToast.classList.add('is-visible');

  window.clearTimeout(previewToastTimeout);
  previewToastTimeout = window.setTimeout(() => {
    previewToast.classList.remove('is-visible');
  }, 2500);
};

const renderImageModal = () => {
  if (!imageModalGallery || !imageModalCounter || !imagePrevButton || !imageNextButton || !imageModalItems.length) {
    return;
  }

  const activeImage = imageModalItems[currentImageIndex];
  imageModalGallery.innerHTML = '';

  const img = document.createElement('img');
  img.src = activeImage.src;
  img.alt = activeImage.alt;
  imageModalGallery.appendChild(img);

  imageModalCounter.textContent = `${currentImageIndex + 1} / ${imageModalItems.length}`;
  imagePrevButton.disabled = currentImageIndex === 0;
  imageNextButton.disabled = currentImageIndex === imageModalItems.length - 1;
};

const openImageModal = (title, images, startIndex = 0) => {
  if (!imageModal || !imageModalTitle || !imageModalGallery || !images.length) return;

  imageModalTitle.textContent = title || 'Image Preview';
  imageModalItems = images.map((src, index) => ({
    src,
    alt: `${title || 'Preview image'} ${index + 1}`
  }));
  currentImageIndex = Math.max(0, Math.min(startIndex, imageModalItems.length - 1));
  renderImageModal();

  imageModal.classList.add('is-open');
  imageModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeImageModal = () => {
  if (!imageModal) return;

  imageModal.classList.remove('is-open');
  imageModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  imageModalItems = [];
  currentImageIndex = 0;
};

detailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const slide = button.closest('.swiper-slide');
    const fallbackTitle = slide?.querySelector('h2')?.textContent?.trim() || 'Project Details';
    const fallbackDescription = slide?.querySelector('.info p')?.textContent?.trim() || 'More details coming soon.';
    const title = button.dataset.detailTitle || fallbackTitle;
    const description = button.dataset.detailDescription || fallbackDescription;

    openDetailModal(title, description);
  });
});

detailCloseTriggers.forEach((trigger) => {
  trigger.addEventListener('click', closeDetailModal);
});

previewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showPreviewToast(button.dataset.previewMessage);
  });
});

imagePreviewButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const title = button.dataset.previewTitle || 'Image Preview';
    const images = (button.dataset.previewImages || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
    const startIndex = Number(button.dataset.previewStart || 0);

    openImageModal(title, images, startIndex);
  });
});

imageModalCloseTriggers.forEach((trigger) => {
  trigger.addEventListener('click', closeImageModal);
});

imagePrevButton?.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    currentImageIndex -= 1;
    renderImageModal();
  }
});

imageNextButton?.addEventListener('click', () => {
  if (currentImageIndex < imageModalItems.length - 1) {
    currentImageIndex += 1;
    renderImageModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeDetailModal();
    closeImageModal();
  }

  if (imageModal?.classList.contains('is-open') && event.key === 'ArrowLeft' && currentImageIndex > 0) {
    currentImageIndex -= 1;
    renderImageModal();
  }

  if (imageModal?.classList.contains('is-open') && event.key === 'ArrowRight' && currentImageIndex < imageModalItems.length - 1) {
    currentImageIndex += 1;
    renderImageModal();
  }
});
