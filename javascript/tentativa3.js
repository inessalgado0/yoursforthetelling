function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
      var elementVisible2=20;
  
      /* if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active"); */
        if (elementTop < windowHeight - elementVisible && elementTop > -elementVisible2) {
          reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);