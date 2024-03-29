var throttle = require('lodash.throttle');

const emailForm = document.querySelector('input[name="email"]');
const textForm = document.querySelector('textarea[name="message"]');
const submit = document.querySelector('button');

const value = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};
emailForm.value = value.email;
textForm.value = value.message;

emailForm.addEventListener('input', throttle(logEmail, 500));
textForm.addEventListener('input', throttle(logText, 500));
submit.addEventListener('click', submitF);

function logEmail(event) {
  value.email = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}

function logText(event) {
  value.message = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}

function submitF(evt) {
  evt.preventDefault();
  if (emailForm.value && textForm.value) {
    const object = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(object);
    value.email = '';
    value.message = '';
    emailForm.value = '';
    textForm.value = '';

    localStorage.removeItem('feedback-form-state');
  } else {
    return alert('!!!!need to fill all text areas!!!!');
  }
}
