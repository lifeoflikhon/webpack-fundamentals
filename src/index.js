import getRandomJoke from "./random-joke";
import './styles/main.scss';
import likhon from './assets/likhon.jpeg';

const jokeEl = document.querySelector("#joke");

let joke;

getRandomJoke()
.then(data => {
  joke = data;
  jokeEl.textContent = joke;
});