const firstNameId = 'firstName';
const lastNameId = 'lastName';
const emailId = 'emailAddress';
const passwordId = 'password';

const showError = (errorMessage) => {
  errorMessage.hidden = false;
};

const hideError = (errorMessage) => {
  errorMessage.hidden = true;
};

const onLoadElem = (elem) => {
  const errorMessage = document.querySelector(`#${elem.id}+span`);

  hideError(errorMessage);
  elem.classList.remove('input-error');
};

const handleInput = (id, event) => {
  const errorMessage = document.querySelector(`#${id}+span`);

  const element = event.target;

  const isValueMissing = element.validity.valueMissing;

  if (isValueMissing) {
    element.placeholder = '';
    showError(errorMessage);
    element.classList.add('input-error');
  } else {
    hideError(errorMessage);
    element.classList.remove('input-error');
  }
};

const handleInputEmail = (id, event) => {
  const errorMessage = document.querySelector(`#${id}+span`);

  const element = event.target;

  const isValueMissing = element.validity.valueMissing;
  const isValid = element.validity.valid;

  if (isValueMissing || !isValid) {
    showError(errorMessage);
    element.classList.add('input-error');
    element.placeholder = 'email@example/com';
  } else {
    hideError(errorMessage);
    element.classList.remove('input-error');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const firstName = document.querySelector(`#${firstNameId}`);
  const lastName = document.querySelector(`#${lastNameId}`);
  const email = document.querySelector(`#${emailId}`);
  const password = document.querySelector(`#${passwordId}`);

  firstName.onload = onLoadElem(firstName);
  firstName.onload = onLoadElem(lastName);
  firstName.onload = onLoadElem(email);
  firstName.onload = onLoadElem(password);

  firstName.addEventListener('input', (event) =>
    handleInput(firstNameId, event)
  );

  lastName.addEventListener('input', (event) =>
    handleInput(lastNameId, event)
  );

  email.addEventListener('input', (event) =>
    handleInputEmail(emailId, event)
  );

  password.addEventListener('input', (event) =>
    handleInput(passwordId, event)
  );
});
