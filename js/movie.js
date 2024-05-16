document.addEventListener("DOMContentLoaded", function() {
    const footerMoviesLink = document.querySelector(".movies-link");
    const moviesSection = document.querySelector(".movies");
    const footerTvSeriesLink = document.querySelector(".tv-series-link");
    const tvSeriesSection = document.querySelector(".tv-series");
    const footerComingSoonLink = document.querySelector(".coming-soon-link");
    const comingsoonSection = document.querySelector(".coming-soon");


    if (footerMoviesLink && moviesSection) {
        footerMoviesLink.addEventListener("click", function(event) {
            event.preventDefault();
            moviesSection.classList.remove("hidden");
            moviesSection.scrollIntoView({ behavior: "smooth" });
        });
    } else {
        console.error("Movies link or section not found.");
    }

    if (footerTvSeriesLink && tvSeriesSection) {
        footerTvSeriesLink.addEventListener("click", function(event) {
            event.preventDefault();
            tvSeriesSection.scrollIntoView({ behavior: "smooth" });
        });
    } else {
        console.error("TV Series link or section not found.");
    }
    if (footerComingSoonLink && comingsoonSection) {
        footerComingSoonLink.addEventListener("click", function(event) {
            event.preventDefault();
            comingsoonSection.classList.remove("hidden");
            comingsoonSection.scrollIntoView({ behavior: "smooth" });
        });
    } else {
        console.error("Coming soon link or section not found.");
    }
});
