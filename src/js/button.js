const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  button.classList.toggle('btn-secondary');
  button.classList.toggle('btn-primary');
});
