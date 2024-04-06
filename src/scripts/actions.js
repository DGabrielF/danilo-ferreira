export function setGreetings() {
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Bom dia";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

export function setLastName(fullName) {
  const fullNameArray = fullName.split(" ");
  while (true) {
    const nameIndex = Math.floor(Math.random()*fullNameArray.length-1)+1
    if (fullNameArray[nameIndex].length > 2 && nameIndex != 0){
      return `${fullNameArray[nameIndex]}.`
    }
  }
}

export function setJoke(jokes) {
  const jokeIndex = Math.floor(Math.random()*jokes.length)
  return jokes[jokeIndex]
}