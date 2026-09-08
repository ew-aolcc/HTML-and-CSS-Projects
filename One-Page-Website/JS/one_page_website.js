// Lightbox slideshow for the beer grid
let lightboxSlideIndex = 1;

// Open modal and add active class when user clicks on the image for on Tap This Week
function openModal() {
    document.getElementById('lightboxModal').classList.add('is-open');
}

// Close modal using "X" and remove active class
function closeModal() {
    document.getElementById('lightboxModal').classList.remove('is-open');
}

// Move to next and previous slide
function plusSlides(n) {
    showSlides(lightboxSlideIndex += n);
}

// Specific slide that user clicks on
function currentSlide(n) {
    showSlides(lightboxSlideIndex = n);
}

// Display the current slide
function showSlides(n) {
    // Get all slides
    const slides = document.getElementsByClassName('lightbox-slide');

    // If there are no slides, return
    if (!slides.length) return;

    // restart the slide if it exceeds the number of slides
    if (n > slides.length) {
        lightboxSlideIndex = 1;
    }

    // go to the last slide if we go from start to end
    if (n < 1) {
        lightboxSlideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Turn on the slide and add fade effect
    slides[lightboxSlideIndex - 1].style.display = 'block';
    slides[lightboxSlideIndex - 1].classList.add('lightbox-fade');
}

// Close the modal on outside click or Escape key
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (!modal.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') plusSlides(-1);
        if (e.key === 'ArrowRight') plusSlides(1);
    });
});
