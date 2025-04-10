document.addEventListener("DOMContentLoaded", function() {
    let carouselIndex = 0;
    const carouselImages = ["carousel1.jpg", "carousel2.jpg", "carousel3.jpg"];
    const carousel = document.querySelector(".carousel");
    const nextButton = document.querySelector(".next");
    const prevButton = document.createElement("button");
    prevButton.classList.add("prev");
    prevButton.innerText = "⬅";
    carousel.appendChild(prevButton);

    function updateCarousel() {
        carousel.style.background = `url('${carouselImages[carouselIndex]}') center/cover no-repeat`;
    }

    nextButton.addEventListener("click", function() {
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", function() {
        carouselIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarousel();
    });

    updateCarousel();
});