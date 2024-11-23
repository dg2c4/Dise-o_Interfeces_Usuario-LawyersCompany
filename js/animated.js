document.addEventListener('DOMContentLoaded', () => {
    const linksList = document.querySelector('.links-list');

    // Animación de entrada
    linksList.style.opacity = '0';
    linksList.style.transform = 'scale(0.95)';
    linksList.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

    setTimeout(() => {
        linksList.style.opacity = '1';
        linksList.style.transform = 'scale(1)';
    }, 50);

    // Animación de hover
    linksList.addEventListener('mouseover', () => {
        linksList.style.filter = 'brightness(120%)';
    });

    linksList.addEventListener('mouseout', () => {
        linksList.addEventListener('mouseout', () => {
            linksList.style.filter = 'brightness(100%)';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const linksList = document.querySelector('.links-list');

    // Animación de entrada
    linksList.style.opacity = '0';
    linksList.style.transform = 'scale(0.95)';
    linksList.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

    setTimeout(() => {
        linksList.style.opacity = '1';
        linksList.style.transform = 'scale(1)';
    }, 50);

    // Animación de hover
    linksList.addEventListener('mouseover', () => {
        linksList.style.filter = 'brightness(120%)';
    });

    linksList.addEventListener('mouseout', () => {
        linksList.style.filter = 'brightness(100%)';
    });
});