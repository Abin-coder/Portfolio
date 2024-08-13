document.addEventListener('DOMContentLoaded', () => {
    createStars();
    addSmoothScrolling();
    addProjectLinks();
});



function addProjectLinks() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const link = project.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
}

function createStars() {
    const starsContainer = document.getElementById('stars-container');

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 5 + 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }

    animateStars();
}

function animateStars() {
    const stars = document.querySelectorAll('.star');
    const starDetails = Array.from(stars).map(star => ({
        element: star,
        xMove: (Math.random() - 0.5) * 0.2,
        yMove: (Math.random() - 0.5) * 0.2,
        xCurrent: parseFloat(star.style.left),
        yCurrent: parseFloat(star.style.top),
        opacity: Math.random() * 0.5 + 0.3
    }));

    function updateStarPositions() {
        starDetails.forEach(starDetail => {
            starDetail.xCurrent += starDetail.xMove;
            starDetail.yCurrent += starDetail.yMove;

            if (starDetail.xCurrent < 0 || starDetail.xCurrent > 100) starDetail.xMove *= -1;
            if (starDetail.yCurrent < 0 || starDetail.yCurrent > 100) starDetail.yMove *= -1;

            starDetail.element.style.left = `${starDetail.xCurrent}%`;
            starDetail.element.style.top = `${starDetail.yCurrent}%`;
            starDetail.element.style.opacity = starDetail.opacity;
        });

        requestAnimationFrame(updateStarPositions);
    }

    updateStarPositions();
}

function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

