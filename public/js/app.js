console.log("Client side javascript is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msgOne = document.querySelector("#msg1");
const msgTwo = document.querySelector("#msg2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  msgOne.textContent = "Loading...";
  msgTwo.textContent = "";

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then(({ forecast, location, error } = {}) => {
        if (error) {
          msgOne.textContent = error;
          msgTwo.textContent = "";
        } else {
          msgOne.textContent = location;
          msgTwo.textContent = forecast;
        }
      });
    }
  );
});
