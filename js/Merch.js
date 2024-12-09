let index=1;
let moveDist;
let products = document.getElementsByClassName("products");
const carousel = document.getElementById("carousel");
getMoveDist();


function getMoveDist() {
    moveDist = products[0].getComputedStyle('width');
    console.log(moveDist);
}