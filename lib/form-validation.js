"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeError = removeError;
exports.validateFormFields = validateFormFields;
var _variables = require("./variables");
function validateFormFields() {
  if (_variables.shortPageName === "contact" && _variables.formFieldset.disabled) {
    // Adjust styles to show form is disabled
    _variables.formDisabledText.style.display = "initial";
    _variables.inputFields.forEach(field => {
      field.style.backgroundColor = "#edf0f0";
      field.style.pointerEvents = "none";
    });
    _variables.textArea.style.backgroundColor = "#edf0f0";
    _variables.textArea.style.pointerEvents = "none";
    _variables.submitBtn.style.backgroundColor = "#edf0f0";
    _variables.submitBtn.style.pointerEvents = "none";
  } else if (_variables.shortPageName === "contact" && !_variables.formFieldset.disabled) {
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
  if (_variables.firstName.validity.valueMissing) {
    showError(_variables.firstName, _variables.firstNameError);
    _variables.firstNameError.textContent = "You need to enter your first name.";
  } else if (_variables.firstName.validity.typeMismatch) {
    showError(_variables.firstName, _variables.firstNameError);
    _variables.firstNameError.textContent = "Entered value needs to be a name.";
  } else {
    removeError(_variables.firstName, _variables.firstNameError);
  }
}
function validateFirstNameInput() {
  _variables.firstName.addEventListener("blur", e => {
    firstNameErrorFunc();
  });
}

// Last Name Validation

function lastNameErrorFunc() {
  if (_variables.lastName.validity.valueMissing) {
    showError(_variables.lastName, _variables.lastNameError);
    _variables.lastNameError.textContent = "You need to enter your first name.";
  } else if (_variables.lastName.validity.typeMismatch) {
    showError(_variables.lastName, _variables.lastNameError);
    _variables.lastNameError.textContent = "Entered value needs to be a name.";
  } else {
    removeError(_variables.lastName, _variables.lastNameError);
  }
}
function validateLastNameInput() {
  _variables.lastName.addEventListener("blur", e => {
    lastNameErrorFunc();
  });
}

// Email Validation

function emailErrorFunc() {
  if (_variables.email.validity.valueMissing) {
    showError(_variables.email, _variables.emailError);
    _variables.emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (_variables.email.validity.typeMismatch) {
    showError(_variables.email, _variables.emailError);
    _variables.emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (_variables.email.validity.tooShort) {
    showError(_variables.email, _variables.emailError);
    _variables.emailError.textContent = "Email should be at least ".concat(_variables.email.minLength, " characters; you entered ").concat(_variables.email.value.length, ".");
  } else {
    removeError(_variables.email, _variables.emailError);
  }
}
function validateEmailInput() {
  _variables.email.addEventListener("blur", e => {
    emailErrorFunc();
  });
}

// Message Validation

function messageErrorFunc() {
  if (_variables.message.validity.valueMissing) {
    showError(_variables.message, _variables.messageError);
    _variables.messageError.textContent = "You must enter a message to submit this form.";
  } else if (_variables.message.validity.typeMismatch) {
    showError(_variables.message, _variables.messageError);
    _variables.messageError.textContent = "You must enter a message to submit this form.";
  } else if (_variables.message.validity.tooShort) {
    showError(_variables.message, _variables.messageError);
    _variables.messageError.textContent = "Message should be at least ".concat(_variables.message.minLength, " characters; you entered ").concat(_variables.message.value.length, ".");
  } else {
    removeError(_variables.message, _variables.messageError);
  }
}
function validateMessageInput() {
  _variables.message.addEventListener("blur", e => {
    messageErrorFunc();
  });
}

// All Fileds Submit Validation

function validateOnSubmit() {
  _variables.form.addEventListener("submit", e => {
    if (!_variables.firstName.validity.valid || !_variables.lastName.validity.valid || !_variables.email.validity.valid || !_variables.message.validity.valid) {
      e.preventDefault();
      firstNameErrorFunc();
      lastNameErrorFunc();
      emailErrorFunc();
      messageErrorFunc();
      _variables.submitError.style.visibility = "visible";
      _variables.submitError.textContent = "Please complete all text fields.";
    } else {
      // Code to submit form
    }
  });
}

// Show/Remove Error Functions

function removeError(inputEl, inputError) {
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