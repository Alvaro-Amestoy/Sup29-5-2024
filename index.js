const contenedor = document.getElementById("contendor")

const articulo = document.createElement("article")
const pRandom = document.createElement("p")

pRandom.textContent = "Hola mundo"

articulo.appendChild(pRandom)
contenedor.appendChild(articulo)