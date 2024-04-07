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
    if (setRandomArrayElement(fullNameArray).length > 2 && setRandomArrayElement(fullNameArray) != fullNameArray[0]){
      return `${setRandomArrayElement(fullNameArray)}.`
    }
  }
}

export function setRandomArrayElement(array) {
  const index = Math.floor(Math.random()*array.length)
  return array[index]
}