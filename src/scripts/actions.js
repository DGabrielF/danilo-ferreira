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

export function openCurriculum() {
  const link = "https://dgabrielf.github.io/curriculum/"
  window.open(link, "_blank")
}

export function switchContactWay(contacts, key, link) {
  if (key.toLowerCase() === "telefone" || key.toLowerCase() === "whatsapp") {
    chatOnWhatsapp(contacts)
  } else if  (key.toLowerCase() === "email") {
    sendEmail(contacts, "Finalmente te encontrei", `${setGreetings()}, estava dando uma olhada no seu portfólio, fiquei muito interessa e resolvi entrar em contato. Gostaria de ...`)
  } else {
    window.open(link, "_blank")
  }
}

function isMobileDevice() {
  const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints;

  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'windows phone'];
  const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));

  return supportsTouch || isMobileUserAgent;
}

export function chatOnWhatsapp(contacts) {
  let phoneNumber = contacts.find(info => info.name.toLowerCase() === "whatsapp");
  const defaultMessage = "Olá Danilo, estava dando uma olhada no seu portfólio e resolvi te contactar."
  let whatsappLink;
  if (isMobileDevice()) {
    whatsappLink = `https://wa.me/${phoneNumber.url}?text=${encodeURIComponent(defaultMessage)}`
  } else {
    whatsappLink = `https://web.whatsapp.com/send?phone=+${phoneNumber.url}`;
  }
  window.open(whatsappLink, "_blank")
}

function sendEmail(contacts, subject, body) {
  let emailAddress = contacts.find(info => info.name.toLowerCase() === "email");
  let request = emailAddress.url
  if (subject) {
    request += `&subject=${encodeURIComponent(subject)}`;
  }
  if (body) {
    request += `&body=${encodeURIComponent(body)}`;
  }
  window.open(request, '_blank')
}

export function setElementsPosition(arrayWithPosition) {
  const TOTAL = 100;
  arrayWithPosition.map((item, index) => {
    const angle = index * 2*Math.PI/ arrayWithPosition.length
    item.left = Math.floor(TOTAL/2*(1+Math.cos(angle)))
    item.bottom = Math.floor(TOTAL/2*(1+Math.sin(angle)))
  })
}