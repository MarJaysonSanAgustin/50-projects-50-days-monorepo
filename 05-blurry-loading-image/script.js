const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');


let load = 0;
let interval = setInterval(blurr, 30);

function blurr () {
  load++;
  if (load > 99) clearInterval(interval);
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, inMin, inMax, outMin, outMax) => {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
