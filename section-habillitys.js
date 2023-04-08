// sessão de tecnologias
function createTecnologies(image){
  return `
  <img src="./assets/img/Icons/${image}.png" alt="${image} logo"/>
  `
}

document.querySelector('#section--header-skills-icon').innerHTML =
createTecnologies("HTML") +
createTecnologies("css-3") +
createTecnologies("js") +
createTecnologies("node-js") +
createTecnologies("git") +
createTecnologies("bootstrap") +
createTecnologies("figma")