console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const inputForm = document.querySelector("input");
const messageOne = document.querySelector("#message_1");
const messageTwo = document.querySelector("#message_2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchValue = inputForm.value;
  messageOne.textContent = "Loading..";
  messageTwo.textContent = "";
  fetch("http://localhost:3001/weather?address=" + searchValue).then(
    (response) =>
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      })
  );
});
