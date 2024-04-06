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