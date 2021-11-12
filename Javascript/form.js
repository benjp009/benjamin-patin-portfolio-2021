onkeyup = 'this.value = this.value.toLowerCase();';


const form = document.getElementById('contact-me-form');
const email = document.getElementById('mail');
const errorUpper = '&#9888; Your email is in uppercase. Please rewrite it in lowercase.';
const small = document.createElement('small');

function checkCase(input) {
  return /[A-Z]/.test(input);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = false;
  const inputEmail = email.value.trim();
  if (checkCase(inputEmail)) {
    form.appendChild(small);
    small.innerHTML = errorUpper;
  } else {
    form.removeChild(small);
    isValid = true;
  }
  if (isValid) {
    form.submit();
  }
});
