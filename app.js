// const api = "https://v2.jokeapi.dev/joke/Any?safe-mode";
const urlApi =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const category = document.querySelector(".category");
const jokeBtn = document.querySelector(".joke-btn");
const jokeSetUp = document.querySelector(".joke-setup");
const jokeDelivery = document.querySelector(".joke-delivery");
const loaderGif = document.querySelector(".loader");
const jokeStatus = document.querySelector(".joke-status");

jokeBtn.addEventListener("click", () => {
  loaderGif.style.display = "block";
  fetch(urlApi) //fatch the data
    .then((res) => {
      return res.json(); //convert the res to json
    })
    .then((data) => {
      //the converted data
      console.log(data);
      loaderGif.style.display = "none";
      if (data.type == "single") {
        jokeDelivery.textContent = data.joke;
        category.textContent = data.category;
        jokeStatus.textContent = data.safe;
        // jokeSetUp.textContent = "";
      } else {
        category.textContent = data.category;
        jokeFlags.textContent = data.setup;
        jokeDelivery.textContent = data.delivery;
      }
    });
});
