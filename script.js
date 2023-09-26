let current = 1;

let playPauseBool = true;

let interval;

const playButton = document.querySelector('.play-pause');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const changeSlides = () => {
    const slideList = document.querySelectorAll('.slide');

    const slides = Array.from(slideList);

    if (current > slides.length) {
        current = 1;
    } else if (current < 1) {
        current = slides.length;
    }

    slides.forEach(slide => {
        if (slide.classList[1].split('-')[1] * 1 === current) {
            slide.style.cssText = 'visibility: visible; opacity: 1'
        } else {
            slide.style.cssText = 'visibility: hidden; opacity: 0'
        }
    })
};

const playPause = () => {
    if (playPauseBool) {
        interval = setInterval(() => {
            current++;
            changeSlides();
        }, 3000);

        playPauseBool = false;

    } else {
        clearInterval(interval);
        playPauseBool = true;
    }

    changePlayPause();
    arrowsVisibility();
}

const changePlayPause = () => {
    const icon = document.querySelector('.play-pause i');

    const cls = icon.classList[1];

    if (cls === 'fa-play') {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

playButton.addEventListener('click', () => {
    playPause();
});

const arrowsVisibility = () => {
    const arrows = document.querySelectorAll('.control');

    Array.from(arrows).forEach(arrow => {
        if (!playPauseBool) {
            arrow.classList.add('arrows-visibility');
        } else {
            arrow.classList.remove('arrows-visibility');
        }
    })
}

leftArrow.addEventListener('click', () => {

    if (!playPauseBool) {
        playPause();
    }

    current--;
    changeSlides();
});

rightArrow.addEventListener('click', () => {

    if (!playPauseBool) {
        playPause();
    }

    current++;
    changeSlides();
});

changeSlides();
