const projectsButton = document.querySelector(".projects-button");
const projectsContainer = document.querySelector(".projects-container");
const headerContainer = document.querySelector(".header-container");

projectsButton.addEventListener("click", () => {
    if (projectsContainer.classList.contains("hidden")) {
        projectsContainer.classList.remove("hidden");
        projectsButton.textContent = "Hide Projects";
    } else {
        projectsContainer.classList.add("hidden");
        projectsButton.textContent = "Show Projects";
    };
});

// Lightbox functionality
const certificateImages = document.querySelectorAll(".certificate"); // All images with the class 'certificate'
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

certificateImages.forEach((img) => {
    img.addEventListener("click", () => {
        // Set the source of the lightbox image to the clicked image's source
        lightboxImg.src = img.src.replace("small", "large"); // Assuming you have a larger version of the image
        lightbox.style.display = "block"; // Show the lightbox
    });
});

// Close the lightbox
function closeLightbox() {
    lightbox.style.display = "none"; // Hide the lightbox
}