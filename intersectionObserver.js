const moreButton = document.querySelector('.morebutton');
const transitionEndTime = 500;
const upodateDataEndTime = 600;

if ('IntersectionObserver' in window) {
  observeActivate();
  moreButton.addEventListener('click', updateIntersectionObServe);
} else {
  offImgMask();
  moreButton.addEventListener('click', offImgMaskWithUpdate);
}

function observeActivate() {
  const worksItem = document.querySelectorAll('.works-item .img-mask');
  let observer = new IntersectionObserver(callback, { rootMargin: '300px 0px -300px 0px' });
  for (const item of worksItem) {
    observer.observe(item);
  }

  function callback(entry) {
    for (const item of entry) {
      if (item.isIntersecting) {
        item.target.style.opacity = '0';
        observer.unobserve(item.target);
        setTimeout(() => {
          item.target.style.display = 'none';
        }, transitionEndTime);
      }
    }
  };
}

function updateIntersectionObServe() {
  setTimeout(() => {
    observeActivate();
  }, upodateDataEndTime);
}

function offImgMask() {
  const worksItem = document.querySelectorAll('.works-item .img-mask');
  for (const item of worksItem) {
    item.style.display = 'none';
  }
}

function offImgMaskWithUpdate() {
  setTimeout(() => {
    offImgMask();
  }, upodateDataEndTime);
}






