const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// validate email
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
email.addEventListener('input', (e) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Email must be in correct format';
  } else {
    emailError.textContent = '';
  }
});

// validate zipcode
const zipcode = document.getElementById('zipcode');
const zipcodeError = document.getElementById('zipcodeError');
zipcode.addEventListener('input', (e) => {
  if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent =
      'zipcode must be in 5-digit format (example: 24551) or 5-digit + 4 format (example: 24551-0001)';
  } else {
    zipcodeError.textContent = '';
  }
});

// validate passwords match
const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');
const password1Error = document.getElementById('password1Error');
const password2Error = document.getElementById('password2Error');

let password1 = '';
let password2 = '';

password1Input.addEventListener('input', (e) => {
  password1 = password1Input.value;
  if (password1Input.validity.tooShort) {
    password1Error.textContent = 'Password must be at least 8 characters';
  } else {
    password1Error.textContent = '';
  }
});

password2Input.addEventListener('input', (e) => {
  password2 = password2Input.value;
  if (password1 !== password2) {
    password2Error.textContent = 'Passwords must match';
  } else {
    password2Error.textContent = '';
  }
});
