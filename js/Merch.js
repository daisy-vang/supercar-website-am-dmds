let index = 0;
let xCoord = 0;
let timedOut = false;
let products = document.getElementsByClassName("product");
const carousel = document.getElementById("carousel");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");
updateXcoord();

function updateXcoord() {
    carousel.style.transform = "translateX(" + xCoord + "px)";
}

function moveCarousel(n) {
    if (!timedOut)
    {
        // This if statement makes sure the items cant go off the screen (i was tired when making it dont make fun of me)
        // When n is negative the thing moves right and when n is positive the thing moves left
        if ((n>0 && index === 0) || (n<0 && index === products.length - 3))
        {
            // The statement for this is all the times when you DONT want to move the carousel
        } else {
            // There is a timeout here to make sure you cant spam
            timedOut = true;
            // These class names are used for styling in merch.css
            buttonLeft.className = buttonLeft.className.replace("active", "");
            buttonRight.className = buttonRight.className.replace("active", "");

            // This updates the xCoordinate
            xCoord += n;
            updateXcoord();

            // This updates the index
            if (n<0) {
                index++;
            } else if (n>0) {
                index--;
            }
    
            // This removes the timeout after 0.5s passes
            setTimeout(function () {
                timedOut = false;

                // This sets both buttons as active
                buttonLeft.className += "active";
                buttonRight.className += "active";
        
                // If the carousel is on either end it'll deactivate that end's button
                if (index >= products.length - 3) {
                    buttonRight.className = buttonRight.className.replace("active", "");
                }
        
                if (index <= 0) {
                    buttonLeft.className = buttonLeft.className.replace("active", "");
                }
            }, 500)
        }
    }
}