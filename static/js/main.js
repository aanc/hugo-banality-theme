function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      header = document.querySelector("header");
    if (distanceY > shrinkOn) {
      header.classList.add("smaller");
    } else {
      if (header.classList.contains("smaller")) {
        header.classList.remove("smaller");
      }
    }
  });
}
window.onload = init();
