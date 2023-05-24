import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';

const emailEl = document.querySelector('input[name=email]');
const messageEl = document.querySelector('textarea[name=message]');
const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

formUpdate();

formEl.addEventListener('input', throttle(dataInput, 500));

function dataInput(evt) {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value;
    formData.message = messageEl.value;
  }
  if (evt.target.name === 'message') {
    formData.message = evt.target.value;
    formData.email = emailEl.value;
  }
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

function formUpdate() {
  const bufferData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));

  if (bufferData) {
    emailEl.value = bufferData.email;
  }
  if (bufferData) {
    messageEl.value = bufferData.message;
  }
}

formEl.addEventListener('submit', formSubmit);

function formSubmit(evt) {
  evt.preventDefault();
  const bufferData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  console.log(bufferData);
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_STORAGE_KEY);
}
