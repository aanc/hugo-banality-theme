function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      header = document.querySelector("header");
      backToTop = document.querySelector("scroll-button");
    if (distanceY > shrinkOn) {
      header.classList.add("smaller");
      backToTop.classList.add("visible");
    } else {
      if (header.classList.contains("smaller")) {
        header.classList.remove("smaller");

        backToTop.classList.remove("visible");
      }
    }
  });
}
window.onload = init();
