// Seleccionar los botones y añadirles el evento 'click'
const instagramButton = document.querySelector('#instagram');
const youtubeButton = document.querySelector('#youtube');
const twitterButton = document.querySelector('#twitter');

instagramButton.addEventListener('click', function() {
  window.open('https://www.instagram.com/', '_blank');
});

youtubeButton.addEventListener('click', function() {
  window.open('https://www.youtube.com/', '_blank');
});

twitterButton.addEventListener('click', function() {
  window.open('https://twitter.com/', '_blank');
});
