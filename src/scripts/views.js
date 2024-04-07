import { setGreetings, setJoke, setLastName } from "./actions.js"

export function toggleTopMenu(state) {
  state.isTopMenuOpen = !state.isTopMenuOpen;
  const topMenu = document.querySelector(".top_menu");
  if (state.isTopMenuOpen) {
    topMenu.classList.remove("hide");
  } else {
    topMenu.classList.add("hide");
  }
}

export function handleGreeting() {
  const greeting = document.querySelector(".greeting");
  greeting.textContent = setGreetings();
}

export function handleLastName(fullName) {
  const lastName = document.querySelector(".last_name");
  lastName.textContent = setLastName(fullName);

}

export function handleJoke(jokes) {
  const joke = document.querySelector(".joke");
  joke.textContent = setJoke(jokes)
}

export function fallingWordsAnimation(wordsArray, fallingDuration) {
  const fallingWords = document.querySelector(".falling_words");
  const wordIndex = Math.floor(Math.random() * wordsArray.length);
  const span = document.createElement('span');
  span.classList.add("matrix-char");
  span.textContent = wordsArray[wordIndex];
  const randomPosition = Math.floor(Math.random() * 90) + 5;
  span.style.left = `${randomPosition}%`;
  fallingWords.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, fallingDuration);
}