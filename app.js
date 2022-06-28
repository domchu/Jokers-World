// const api = "https://v2.jokeapi.dev/joke/Any?safe-mode";
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const category = document.querySelector(".category");
const jokeBtn = document.querySelector(".joke-btn");
const jokeSetUp = document.querySelector(".joke-setup");
const jokeDelivery = document.querySelector(".joke-delivery");
const loader = document.querySelector(".loader");

jokeBtn.addEventListener("click", () => {
  loader.style.display = "block";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      loader.style.display = "none";
      if (data.type == "single") {
        jokeDelivery.textContent = data.joke;
        category.textContent = data.category;
        // jokeSetUp.textContent = "";
      } else {
        category.textContent = data.category;
        jokeFlags.textContent = data.setup;
        jokeDelivery.textContent = data.delivery;
      }
    });
});
