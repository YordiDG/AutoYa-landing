const howItWorksSectionRef = document.getElementById("how-it-works-section");
const reviewsSectionRef = document.getElementById("reviews-section");
const aboutSectionRef = document.getElementById("about-section");
const downloadSectionRef = document.getElementById("download-section");
const becomeFavorerSectionRef = document.getElementById("become-favorer-section");


const navigate = (htmlElement, scrollLogicalPosition = "start") => htmlElement.scrollIntoView({ behavior: "smooth", block: scrollLogicalPosition });

document.getElementById("how-it-works-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(howItWorksSectionRef);
});
document.getElementById("reviews-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(reviewsSectionRef);
});
document.getElementById("about-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(aboutSectionRef);
});
document.getElementById("download-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(downloadSectionRef);
});
document.getElementById("become-favorer-button").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(becomeFavorerSectionRef);
});