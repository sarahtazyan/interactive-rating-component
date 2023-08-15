const ratingButtons = document.querySelectorAll('.round-button');
const ratingText = document.getElementById('rating');
const ratingContainer = document.querySelector('.container');
const thankYouContainer = document.querySelector('.container-t');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  const rating = ratingText.textContent;
  ratingContainer.style.display = 'none';
  thankYouContainer.style.display = 'block';
  thankYouContainer.scrollIntoView({ behavior: 'smooth' });
});

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rating = button.textContent;
    ratingText.textContent = rating;
  });
});
const ratingsButtons = document.querySelectorAll('.round-button');

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingsButtons.forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});