/* 
 OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele 

 - retirar a classe selecionado do personagem que está selecionado


 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande

    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll(".personagem");
let jogadorSelecionado = 'jogador-1'
let personagemSelecionado1 = ''
personagens.forEach((personagem) => {
  personagem.addEventListener("click", () => {
    jogadorSelecionado = 'jogador-2'
    personagemSelecionado1 = personagem.attributes.id.value
  })
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;


    /* 
        OBJETIVO 1
    */
   const selecionando = jogadorSelecionado === 'jogador-1' ? "selecionado": "jogador-2-selecionado"
    const personagemSelecionado = document.querySelector(`.${selecionando}`);
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove(selecionando);
    }

    personagem.classList.add(selecionando);

    /* 
        OBJETIVO 2
    */

    const imagemJogador1 = document.getElementById(`personagem-${jogadorSelecionado}`);
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById(`nome-${jogadorSelecionado}`);
    const nomeSelecionado = personagem.getAttribute('data-name');
    const tagSelecionado = personagem.getElementsByClassName('tag')
    if (jogadorSelecionado === 'jogador-1') {
      tagSelecionado[0].innerHTML = '1P'
    }
    else if (personagemSelecionado1 !== idSelecionado) {
      tagSelecionado[0].innerHTML = '2P'
    }
    
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});
