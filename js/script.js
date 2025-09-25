const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
/*视频播放速度*/
var video = document.getElementById('video-background');
    video.playbackRate = 0.2;

    const nav =document.getElementById('nav');
    const toggle =document.getElementById('toggle')
    
    
    toggle.addEventListener('click', () => nav.classList.toggle('active'))


/*懒加载优化网页访问速度*/
    function lazyLoad() {
      const lazyImages = document.querySelectorAll('.lazy');

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyImage = entry.target;
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.add('lazy-loaded');
              observer.unobserve(lazyImage);
            }
          });
        });

        lazyImages.forEach((lazyImage) => {
          observer.observe(lazyImage);
        });
      } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyImages.forEach((lazyImage) => {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add('lazy-loaded');
        });
      }
    }

    window.addEventListener('load', lazyLoad);
        
      