import {
  formDisabledText,
  form,
  formFieldset,
  inputFields,
  textArea,
  firstName,
  firstNameError,
  lastName,
  lastNameError,
  email,
  emailError,
  message,
  messageError,
  submitBtn,
  submitError,
  shortPageName,
} from "./variables";

export function validateFormFields() {
  if (shortPageName === "contact" && formFieldset.disabled) {
    // Adjust styles to show form is disabled
    formDisabledText.style.display = "initial";

    inputFields.forEach((field) => {
      field.style.backgroundColor = "#edf0f0";
      field.style.pointerEvents = "none";
    });

    textArea.style.backgroundColor = "#edf0f0";
    textArea.style.pointerEvents = "none";

    submitBtn.style.backgroundColor = "#edf0f0";
    submitBtn.style.pointerEvents = "none";
  } else if (shortPageName === "contact" && !formFieldset.disabled) {
    // Validate form fields if form is not diabled
    validateFirstNameInput();
    validateLastNameInput();
    validateEmailInput();
    validateMessageInput();
    validateOnSubmit();
  }
}

// First Name Validation

function firstNameErrorFunc() {
  if (firstName.validity.valueMissing) {
    showError(firstName, firstNameError);
    firstNameError.textContent = "You need to enter your first name.";
  } else if (firstName.validity.typeMismatch) {
    showError(firstName, firstNameError);
    firstNameError.textContent = "Entered value needs to be a name.";
  } else {
    removeError(firstName, firstNameError);
  }
}

function validateFirstNameInput() {
  firstName.addEventListener("blur", (e) => {
    firstNameErrorFunc();
  });
}

// Last Name Validation

function lastNameErrorFunc() {
  if (lastName.validity.valueMissing) {
    showError(lastName, lastNameError);
    lastNameError.textContent = "You need to enter your first name.";
  } else if (lastName.validity.typeMismatch) {
    showError(lastName, lastNameError);
    lastNameError.textContent = "Entered value needs to be a name.";
  } else {
    removeError(lastName, lastNameError);
  }
}

function validateLastNameInput() {
  lastName.addEventListener("blur", (e) => {
    lastNameErrorFunc();
  });
}

// Email Validation

function emailErrorFunc() {
  if (email.validity.valueMissing) {
    showError(email, emailError);
    emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (email.validity.typeMismatch) {
    showError(email, emailError);
    emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (email.validity.tooShort) {
    showError(email, emailError);
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  } else {
    removeError(email, emailError);
  }
}

function validateEmailInput() {
  email.addEventListener("blur", (e) => {
    emailErrorFunc();
  });
}

// Message Validation

function messageErrorFunc() {
  if (message.validity.valueMissing) {
    showError(message, messageError);
    messageError.textContent = "You must enter a message to submit this form.";
  } else if (message.validity.typeMismatch) {
    showError(message, messageError);
    messageError.textContent = "You must enter a message to submit this form.";
  } else if (message.validity.tooShort) {
    showError(message, messageError);
    messageError.textContent = `Message should be at least ${message.minLength} characters; you entered ${message.value.length}.`;
  } else {
    removeError(message, messageError);
  }
}

function validateMessageInput() {
  message.addEventListener("blur", (e) => {
    messageErrorFunc();
  });
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
      e.preventDefault();
      firstNameErrorFunc();
      lastNameErrorFunc();
      emailErrorFunc();
      messageErrorFunc();

      submitError.style.visibility = "visible";
      submitError.textContent = "Please complete all text fields.";
    } else {
      // Code to submit form
    }
  });
}

// Show/Remove Error Functions

export function removeError(inputEl, inputError) {
  inputEl.classList.remove("input--invalid");
  inputError.textContent = "";
  inputError.style.visibility = "hidden";
}

function showError(inputEl, inputError) {
  inputEl.classList.add("input--invalid");
  inputError.style.visibility = "visible";
  inputError.setAttribute("aria-live", "polite");
  inputError.focus();
}
