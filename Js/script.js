
// Image click effect (zoom)
const images = document.querySelectorAll(".img");

images.forEach(function (img) {
  img.addEventListener("click", function () {
    if (img.style.transform === "scale(1.1)") {
      img.style.transform = "scale(1)";
    } else {
      img.style.transform = "scale(1.1)";
    }

    img.style.transition = "0.3s";
  });
});

// Book Now button message
function bookService() {
  alert("Your booking request has been received. We will contact you soon!");
}
