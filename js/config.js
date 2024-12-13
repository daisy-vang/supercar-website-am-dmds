let currentRotation = 1; // Default rotation step
let totalImages = 36; // Total number of images for 360-degree rotation (can be more or fewer)

const carModel = document.getElementById("carModel");

// Function to change car color
function changeCarColor(color) {
    // Update image path based on selected color
    for (let i = 1; i <= totalImages; i++) {
        carModel.src = `car/${color}/car${i}.jpg`; // car/color/car# for rotating images
        setTimeout(() => {
            carModel.style.opacity = "1";
        }, 200);
    }
}

// Function to change wheels
function changeWheel(type) {
    // Update image path for wheels
    for (let i = 1; i <= totalImages; i++) {
        carModel.src = `car/${type}/car${i}.jpg`; // car/type/car# for rotating images
        setTimeout(() => {
            carModel.style.opacity = "1";
        }, 200);
    }
}

// Function to change roof type
function changeRoof(type) {
    // Update image path for roof
    for (let i = 1; i <= totalImages; i++) {
        carModel.src = `car/${type}/car${i}.jpg`; // car/type/car# for rotating images
        setTimeout(() => {
            carModel.style.opacity = "1";
        }, 200);
    }
}

// Rotate car images for 360-degree effect
function rotateCar() {
    currentRotation = (currentRotation % totalImages) + 1; // Loop through the images
    carModel.src = `car/white/car${currentRotation}.jpg`; // Loop through the white car images
    setTimeout(rotateCar, 100); // Change image every 100ms for smooth rotation
}

// Start rotating the car
rotateCar();