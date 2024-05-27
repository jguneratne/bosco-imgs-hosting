import {
  form,
  firstName,
  firstNameError,
  lastName,
  lastNameError,
  email,
  emailError,
  message,
  messageError,
} from "./variables";

export function validateFormFields() {
  validateFirstNameInput();
  validateLastNameInput();
  validateEmailInput();
  validateMessageInput();
  validateOnSubmit();
}

// First Name Validation

function validateFirstNameInput() {
  firstName.addEventListener("blur", (e) => {
    if (firstName.validity.valid) {
      firstNameError.textContent = "";
      firstNameError.style.visibility = "hidden";
      firstName.classList.remove("firstName--invalid");
    } else {
      showFirstNameError();
    }
  });
}

function showFirstNameError() {
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "You need to enter your first name.";
    firstNameError.style.visibility = "visible";
    firstName.classList.add("firstName--invalid");
  } else if (firstName.validity.typeMismatch) {
    firstNameError.textContent = "Entered value needs to be a name.";
    firstNameError.style.visibility = "visible";
    firstName.classList.add("firstName--invalid");
  }
}

// Last Name Validation

function validateLastNameInput() {
  lastName.addEventListener("blur", (e) => {
    if (lastName.validity.valid) {
      lastNameError.textContent = "";
      lastNameError.style.visibility = "hidden";
      lastName.classList.remove("lastName--invalid");
    } else {
      showLastNameError();
    }
  });
}

function showLastNameError() {
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "You need to enter your last name.";
    lastNameError.style.visibility = "visible";
    lastName.classList.add("lastName--invalid");
  } else if (lastName.validity.typeMismatch) {
    lastNameError.textContent = "Entered value needs to be a name.";
    lastNameError.style.visibility = "visible";
    lastName.classList.add("lastName--invalid");
  }
}

// Email Validation

function validateEmailInput() {
  email.addEventListener("blur", (e) => {
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.style.visibility = "hidden";
      email.classList.remove("emailField--invalid");
    } else {
      showEmailError();
    }
  });
}

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent =
      "Email address must be in standard format: your-email@email.com.";
    emailError.style.visibility = "visible";
    email.classList.add("emailField--invalid");
  } else if (email.validity.typeMismatch) {
    emailError.textContent =
      "Email address must be in standard format: your-email@email.com.";
    emailError.style.visibility = "visible";
    emailError.style.visibility = "visible";
    email.classList.add("emailField--invalid");
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    emailError.style.visibility = "visible";
    emailError.style.visibility = "visible";
    email.classList.add("emailField--invalid");
  }
}

// Message Validation

function validateMessageInput() {
  message.addEventListener("blur", (e) => {
    if (message.validity.valid) {
      messageError.textContent = "";
      messageError.style.visibility = "hidden";
      message.classList.remove("messageField--invalid");
    } else {
      showMessageError();
    }
  });
}

function showMessageError() {
  if (email.validity.valueMissing) {
    messageError.textContent = "You must enter a message to submit this form.";
    messageError.style.visibility = "visible";
    emailError.style.visibility = "visible";
    message.classList.add("messageField--invalid");
  } else if (email.validity.typeMismatch) {
    messageError.textContent = "You must enter a message to submit this form.";
    messageError.style.visibility = "visible";
  } else if (email.validity.tooShort) {
    messageError.textContent = `Message should be at least ${message.minLength} characters; you entered ${message.value.length}.`;
    messageError.style.visibility = "visible";
    message.classList.add("messageField--invalid");
  }
}

// All Fileds Submit Validation

function validateOnSubmit() {
  form.addEventListener("submit", (e) => {
    if (
      !firstName.validity.valid ||
      !lastName.validity.valid ||
      !email.validity.valid ||
      !message.validity.valid
    ) {
      showFirstNameError();
      showLastNameError();
      showEmailError();
      showMessageError();
      e.preventDefault();
    }
  });
}
