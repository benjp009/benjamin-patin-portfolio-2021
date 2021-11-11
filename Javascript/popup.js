// eslint-disable-next-line no-unused-vars
// Get the modal
const modal = document.getElementById('popup');

// Get the button that opens the modal
const btn = document.getElementById('btn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = () => {
  modal.style.display = 'grid';
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
