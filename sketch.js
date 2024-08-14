let musica;

function preload(){
  musica = loadSound("fundo.mp3");
}

function setup() {
  musica.loop();
  musica.play();
}

const avança = document.querySelectorAll(".proximo");

//forEach pois tem que mostrar para cada vez novas possibilidades;

//=> faça alguma coisa!

//CÓDIGO QUE FICA ESPERANDO ALGUEM APERTAR O BOTÃO

avança.forEach(button => {
  
button.addEventListener('click', function(){
  
//o que fazer quando o botão for apertado?
const atual = document.querySelector('.ativo');
  
//pular para a próxima página de possibilidades
const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

//remove o anterior
atual.classList.remove('ativo');

//ativa o próximo
document.getElementById(proximoPasso).classList.add('ativo');
})
})


