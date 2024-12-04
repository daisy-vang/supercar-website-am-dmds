let slideIndex = 0;
showSlides();

// The function for the automatic slideshow
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("header");
  slideIndex++;
//   If the last slide is reached, reset to zero
  if (slideIndex > slides.length) {slideIndex = 1}
  
//   Bring active slide to top and bring to the front
  slides[slideIndex-1].style.zIndex = "1"
  slides[slideIndex-1].style.transform = "translateX(0)";

//   Slides the slide being pushed out
  if (slideIndex - 2 < 0)
  {
    slides[slides.length - 1].style.transform = "translateX(-100%)";
  } else {
    slides[slideIndex-2].style.transform = "translateX(-100%)";
  }

//   Brings the slide under to the back
  if (slideIndex - 2 < 0)
    {
        slides[slides.length - 1].style.zIndex = "-1";
    } else {
        slides[slideIndex-2].style.zIndex = "-1"
    }

    // After the transition is over bring the inactive slide to the right side
  setTimeout(function () {
    if (slideIndex - 2 < 0)
    {
        slides[slides.length - 1].style.transform = "translateX(100%)";
    } else {
        slides[slideIndex-2].style.transform = "translateX(100%)";
    }
  }, 1500)

//   Loop the function
  setTimeout(showSlides, 3500); // Change image every 5 seconds
}