const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

/* 视频播放速度 */
const video = document.getElementById('video-background');
if (video) {
  video.playbackRate = 0.2;
}

const nav = document.getElementById('nav');
const toggle = document.getElementById('toggle');

if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

/* 懒加载优化网页访问速度 */
function lazyLoad() {
  const lazyImages = document.querySelectorAll('.lazy');

  if (!lazyImages.length) {
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          const dataSrc = lazyImage.dataset.src;
          if (dataSrc) {
            lazyImage.src = dataSrc;
          }
          lazyImage.classList.add('lazy-loaded');
          obs.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach((lazyImage) => {
      observer.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    lazyImages.forEach((lazyImage) => {
      const dataSrc = lazyImage.dataset.src;
      if (dataSrc) {
        lazyImage.src = dataSrc;
      }
      lazyImage.classList.add('lazy-loaded');
    });
  }
}

window.addEventListener('load', lazyLoad);
