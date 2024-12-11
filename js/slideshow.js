let slideIndex = 1;
let incomingLeftSlide = false;
let abruptChange = false;
let timedOut = false;
showSlides(slideIndex);
setInterval(autoMove(), 8000);

function autoMove() {
  plusSlides(1);
  // The second number in this function is delay in milliseconds
  setTimeout(autoMove, 8000);
}

// Next/previous controls
function plusSlides(n) {
  // The timeout function is here so people can't spam, if spammed the transitions break
  if (!timedOut)
  {
    if (n > 0) {
      incomingLeftSlide=false;
    } else if (n < 0) {
      incomingLeftSlide=true;
    }
    timedOut = true;
    showSlides(slideIndex += n);

    // The timeout here is 1500 since the transition time is 1.5 seconds
    setTimeout(function () {
      timedOut = false;
    }, 1500);
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("header");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
    // If the slide coming in is from the right, run this (the slides are positioned differently for the left or right transitions)
    if (!incomingLeftSlide) {
      for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
      }
      slides[slideIndex-1].className += " active";

      // Bring all slides to the right (no transition so it happens immediately)
      for (i = 0; i < slides.length; i++) {
        slides[i].style.transition = "none"
        slides[i].style.display = "flex";
        slides[i].style.transform = "translateX(100%)";
      }

      // Bring active slide to front
      slides[slideIndex-1].style.transition = "all 1.5s ease-in-out";
      slides[slideIndex-1].style.transform = "translateX(0)";

      // Bring the slide being pushed to the left
      // The if is here so it doesn't select something outside of the list
      if (slideIndex - 2 < 0) {
        slides[slides.length-1].style.transition = "all 1.5s ease-in-out";
        slides[slides.length-1].style.transform = "translateX(-100%)";
      } else {
        slides[slideIndex-2].style.transition = "all 1.5s ease-in-out";
        slides[slideIndex-2].style.transform = "translateX(-100%)";
      }
    } 
    // The code here is almost the exact same as the top, but mirrored
    else if (incomingLeftSlide) {
      for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
      }
      slides[slideIndex-1].className += " active";

      for (i = 0; i < slides.length; i++) {
        slides[i].style.transition = "none"
        slides[i].style.display = "flex";
        slides[i].style.transform = "translateX(-100%)";
      }

      slides[slideIndex-1].style.transition = "all 1.5s ease-in-out";
      slides[slideIndex-1].style.transform = "translateX(0)";

      if (slideIndex + 1 > slides.length) {
        slides[0].style.transition = "all 1.5s ease-in-out";
        slides[0].style.transform = "translateX(100%)";
      } else {
        slides[slideIndex].style.transition = "all 1.5s ease-in-out";
        slides[slideIndex].style.transform = "translateX(100%)";
      }
  }
}