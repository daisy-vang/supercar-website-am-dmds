function reveal() {
    const side_nav = document.getElementById("links");
    if (side_nav.style.display === "none") {
        side_nav.style.display = "flex";
      } else {
        side_nav.style.display = "none";
      }
}