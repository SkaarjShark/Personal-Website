const projectsButton = document.querySelector(".projects-button");
const projectsContainer = document.querySelector(".projects-container");
const projectsButtonText = document.querySelector(".projects-button-text");
const projectTitle = document.querySelectorAll(".project-title")
const projectMore = document.querySelectorAll(".project-more")

projectsButton.addEventListener("click", () => {
    if (projectsContainer.classList.contains("hidden")) {
        projectsContainer.classList.remove("hidden");
        projectsButton.textContent = "Hide Projects";
        projectsButtonText.textContent = "Here are some of my projects I worked on during my time at Bloomtech."
    } else {
        projectsContainer.classList.add("hidden");
        projectsButton.textContent = "Show Projects";
        projectsButtonText.textContent = "← Click to see some of my projects I worked on during my time at Bloomtech."
    };
});

for (let i=0; i < projectTitle.length; i++) {
    projectTitle[i].addEventListener("click", () => {
        if (projectMore[i].classList.contains("hidden")) {
            projectMore[i].classList.remove("hidden");
        } else {
            projectMore[i].classList.add("hidden");
        };
    });
};

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