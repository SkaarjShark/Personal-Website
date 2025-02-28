const projectsButton = document.querySelector(".projects-button");
const projectsContainer = document.querySelector(".projects-container");
const headerContainer = document.querySelector(".header-container");

projectsButton.addEventListener("click", () => {
    if (projectsContainer.classList.contains("hidden")) {
        projectsContainer.classList.remove("hidden");
    } else {
        projectsContainer.classList.add("hidden");
    };
});

//TO DO: When you click on the certificate images, they pop up and display bigger on your screen, like Wikipedia stuff.