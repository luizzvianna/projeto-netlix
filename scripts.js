
const botaoSom = document.querySelector (".botao-som")
const video = document.querySelector (".video")
const modal = document.querySelector (".modals")

botaoSom.addEventListener ("click", ligaSom)

const botao = document.querySelector (".link-info")

function ligaSom (){
    video.muted = false
}

botao.addEventListener ("click", mostrarModals)
modal.addEventListener ("click", esconderModals)

function mostrarModals () {
modal.style.display = "block"
}

function esconderModals (){
    modal.style.display = "none"
}

