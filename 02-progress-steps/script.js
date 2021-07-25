const progress = document.getElementById('progress');
const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActiveStep = 1;

nextButton.addEventListener('click', () => {
  currentActiveStep++;
  if (currentActiveStep > circles.length) currentActiveStep = circles.length;
  update();
});

previousButton.addEventListener('click', () => {
  currentActiveStep--;
  if (currentActiveStep < 1) currentActiveStep = 1;
  update();
});

function update () {
  circles.forEach((circle, index) => {
    if (index < currentActiveStep) circle.classList.add('active');
    else circle.classList.remove('active');
  });

  const actives = document.querySelectorAll('.active');
  const activesNumber = actives.length - 1;
  const circlesNumber = circles.length - 1;
  const progressNumber = (activesNumber / circlesNumber) * 100;
  progress.style.width = `${progressNumber}%`;

  if (currentActiveStep === 1) {
    previousButton.disabled = true;
  } else if (currentActiveStep === circles.length) {
    nextButton.disabled = true;
  } else {
    previousButton.disabled = false;
    nextButton.disabled = false;
  }
};
