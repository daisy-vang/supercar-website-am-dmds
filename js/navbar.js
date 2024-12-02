const side_nav = document.getElementById("links");

// This function brings out the hamburger menu once the menu is clicked
function reveal() {
    if (side_nav.style.display === "flex") {
        side_nav.style.display = "none";
      } else {
        side_nav.style.display = "flex";
      }
}