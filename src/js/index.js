
const listaSelecaoLotr = document.querySelectorAll(".lotr");

listaSelecaoLotr.forEach(lotr => {
   lotr.addEventListener("click", () => {
      esconderCartaoLotr();

      const idLotrSelecionado = mostrarCartaoLotrSelecionado(lotr);

      desativarLotrNaListagem();
      ativarLotrSelecionadoNaListagem(idLotrSelecionado);
   })
})


function ativarLotrSelecionadoNaListagem(idLotrSelecionado) {
   const lotrSelecionadoNaListagem = document.getElementById(idLotrSelecionado);
   lotrSelecionadoNaListagem.classList.add("ativo");
}

function desativarLotrNaListagem() {
   const lotrAtivoNaListagem = document.querySelector(".ativo");
   lotrAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoLotrSelecionado(lotr) {
   const idLotrSelecionado = lotr.attributes.id.value;
   const idDoCartaoLotrParaAbrir = "cartao-" + idLotrSelecionado;
   const cartaoLotrParaAbrir = document.getElementById(idDoCartaoLotrParaAbrir);
   cartaoLotrParaAbrir.classList.add("aberto");
   return idLotrSelecionado;
}

function esconderCartaoLotr() {
   const cartaoLotrAberto = document.querySelector(".aberto");
   cartaoLotrAberto.classList.remove("aberto");
}

