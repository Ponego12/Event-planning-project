let currentIndex = 0;

function moveSlide(step, galleryId) {
    const slider = document.querySelector(`#${galleryId} .slider`);
    const slides = slider.children;
    const totalSlides = slides.length;

    // Update the index
    currentIndex += step;

    // Loop back to the start or end if necessary
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Go to the last slide
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Go back to the first slide
    }

    // Move the slider to the correct position
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}