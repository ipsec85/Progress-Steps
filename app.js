const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

// update DOM
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    // needed to fill at numbered marks
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // check if currentActive at start
    if (currentActive === 1) {
        prev.disabled = true;
    // check if currentActive at end
    } else if (currentActive === circles.length) {
        next.disabled = true;
    // check if currentActive in middle
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};