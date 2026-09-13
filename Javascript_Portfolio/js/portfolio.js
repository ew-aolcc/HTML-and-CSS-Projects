// Open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Show the first slide on page load
var slideIndex = 1;
showSlides(slideIndex);

// Prev/next arrow controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot navigation
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Close the contact form when clicking outside it
document.addEventListener("click", function (event) {
    if (event.target.matches(".cancel") ||
        (!event.target.closest(".form-popup") &&
            !event.target.closest(".Pop_Up_Button") &&
            !event.target.closest(".contact"))) {
        closeForm();
    }
}, false);
