import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';

const email = document.querySelector('input[name=email]');
console.log(email);

const message = document.querySelector('textarea[name=message]');
console.log(message);

const formEl = document.querySelector('.feedback-form');
console.log(formEl);

const formData = {
  email: '',
  message: '',
};

formUpdate();

formEl.addEventListener('input', throttle(dataInput, 500));

function dataInput(evt) {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value;
  }

  if (evt.target.name === 'message') {
    formData.message = evt.target.value;
  }
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
  formUpdate();
}

function formUpdate() {
 const bufferData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY));
  if(bufferData){
    email.value = bufferData.email;
    message.value = bufferData.message;
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
