const lojaBotao = document.querySelector(".loja-link")
const links = document.querySelector(".links")

lojaBotao.addEventListener('click', () => {
	links.classList.toggle('ativo')
})