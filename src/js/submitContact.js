import { form, submitMessage } from "./variables";

export async function sendContact() {
  const formData = new FormData(form);
  console.log(formData);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  showSubmitMessage();
  submitMessage.textContent = "Please wait...";

  fetch("https://api.web3form.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        console.log(response);
        showSubmitMessage();
        submitMessage.textContent =
          "Thanks for reaching out. I'll be in touch soon!";
      } else {
        console.log(response);
        submitMessage.textContent = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      showSubmitError();
      submitMessage.textContent = error + ".  Please try again.";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        submitMessage.style.visibility = "hidden";
      }, 4000);
    });
}

function showSubmitMessage() {
  submitMessage.style.visibility = "visible";
  submitMessage.style.color = "#254710";
  submitMessage.setAttribute("aria-live", "polite");
  submitMessage.focus();
}

function showSubmitError() {
  submitMessage.style.visibility = "visible";
  submitMessage.style.color = "#931b05";
  submitMessage.setAttribute("aria-live", "polite");
  submitMessage.focus();
}
