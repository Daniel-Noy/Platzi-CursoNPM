const messages = [
  "Hola!",
  "Sigues aqui?",
  "Mensaje 3"
]

const randomMsg = ()=> {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message + "Esta es la segunda versión");
}

module.exports = { randomMsg };