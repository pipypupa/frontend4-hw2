// task 1
const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');
console.log(sliderImage);

function updateImageSize(event) {
  const scale = event.target.value / 100;
  sliderImage.style.transform = `scale(${scale})`;
}

const debouncedUpdate = _.debounce(updateImageSize, 100);

sliderInput.addEventListener('input', debouncedUpdate);

// task 2

