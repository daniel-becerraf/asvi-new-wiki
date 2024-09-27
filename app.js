// JavaScript
const bentoBoxCards = document.querySelectorAll('.bento-box-card');
const selectedBentoBox = document.querySelector('.selected-bento-box');

bentoBoxCards.forEach((card) => {
  card.addEventListener('click', () => {
    const nextOptions = card.dataset.nextOptions.split(',');
    updateSelectedBentoBox(nextOptions);
  });
});

function updateSelectedBentoBox(options) {
  selectedBentoBox.innerHTML = '';

  options.forEach((option) => {
    const optionElement = document.createElement('div');
    optionElement.textContent = option;
    selectedBentoBox.appendChild(optionElement);
  });
}