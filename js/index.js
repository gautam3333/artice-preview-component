const btnShare = document.querySelector('.btn-share');
const cardTextBox = document.querySelector('.card-text');
btnShare.addEventListener('click', function () {
  cardTextBox.classList.toggle('open-share-box');
});
