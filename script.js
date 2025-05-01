// Containers
const resumeContainer = document.querySelector(".resume-container");
const projectsContainer = document.querySelector(".projects-container");
const certificateContainer = document.querySelector(".certificate-container");

// Buttons
const resumeButton = document.querySelector(".resume-button");
const projectsButton = document.querySelector(".projects-button");
const certificateButton = document.querySelector(".certificate-button");

// Functionality
resumeButton.addEventListener("click", () => {
    projectsContainer.classList.add("hidden");
    certificateContainer.classList.add("hidden");
    if (resumeContainer.classList.contains("hidden")) {
        resumeContainer.classList.remove("hidden");
    } else {
        resumeContainer.classList.add("hidden");
    };
});
projectsButton.addEventListener("click", () => {
    resumeContainer.classList.add("hidden");
    certificateContainer.classList.add("hidden");
    if (projectsContainer.classList.contains("hidden")) {
        projectsContainer.classList.remove("hidden");
    } else {
        projectsContainer.classList.add("hidden");
    };
});
certificateButton.addEventListener("click", () => {
    resumeContainer.classList.add("hidden");
    projectsContainer.classList.add("hidden");
    if (certificateContainer.classList.contains("hidden")) {
        certificateContainer.classList.remove("hidden");
    } else {
        certificateContainer.classList.add("hidden");
    };
});

// ----OLD SCRIPT---- //
/*
const projectsButton = document.querySelector(".projects-button");
const projectsContainer = document.querySelector(".projects-container");
const projectsButtonText = document.querySelector(".projects-button-text");
const project = document.querySelectorAll(".project")
const projectTitle = document.querySelectorAll(".project-title")
const projectMore = document.querySelectorAll(".project-more")
const projectTitleClicked = [
    "Asylum Office Grant Rate Tracker",
    "Api with Data Accessing Endpoints",
    "Widget/Grid",
    "Pizza Ordering Form",
    "Login Form"
];
const projectTitleNonclicked = [
    "Asylum Office Grant Rate Tracker ← Click to see more details on the project",
    "Api with Data Accessing Endpoints ← Click to see more details on the project",
    "Widget/Grid ← Click to see more details on the project",
    "Pizza Ordering Form ← Click to see more details on the project",
    "Login Form ← Click to see more details on the project"
];

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
    project[i].addEventListener("click", () => {
        if (projectMore[i].classList.contains("hidden")) {
            projectMore[i].classList.remove("hidden");
            projectTitle[i].textContent = projectTitleClicked[i]
        } else {
            projectMore[i].classList.add("hidden");
            projectTitle[i].textContent = projectTitleNonclicked[i];
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
*/