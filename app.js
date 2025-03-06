let listaDeNomesDosAmigos = [];
let numeroLimiteDeNomes = 10 ;
let amigoSecreto = "";
let campoRecebeNome = "";
let nomeAtual = "";
let numeroDeAmigosAdicionados = 0 ;




exibirMensagemInicial();
//Função que automatiza a exibição de textos nos elementos do html.
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   
 }

//Função que chama a mensagem inicial usando a função exibirTextoNaTela.
   function exibirMensagemInicial(){
    exibirTextoNaTela("h2", "Digite o nome dos seus amigos");
}
// Função que adiciona a lista de nomes de amigos a cada clique do botão,
//usando if-else para checar a condição de número máximo de amigoas na lista e 
//se determinado nome já não foi adicionado antes, passando por essas duas condições
//o nome dos amigos e adicionado ao vetor listaDeNomeDOsAmigos

function adicionarAmigo(){
  nomeAtual = document.querySelector("input").value;
    if (nomeAtual == ""){
    alert("Por favor, insira um nome!");
  } else{
     campoRecebeNome = nomeAtual;
    numeroDeAmigosAdicionados++;
  }
    
    if (numeroDeAmigosAdicionados == numeroLimiteDeNomes + 1){
        exibirTextoNaTela("h2","Você já adicionou o número máximo de amigos!");
        limpaCampo();       
        
    } else{
    
      if (listaDeNomesDosAmigos.includes(nomeAtual)){
        exibirTextoNaTela("h2","Este nome já foi adicionado!");         
        limpaCampo();
      }
       else {
        exibirTextoNaTela("h2", "");
        listaDeNomesDosAmigos.push(campoRecebeNome);
        limpaCampo();
        atualizaListaDeAmigos();
       }

    }
}

// Percorrer o array e adicionar elementos à lista
function atualizaListaDeAmigos (){
  
listaAmigos.innerHTML = ""; 

for (let i = 0; i < listaDeNomesDosAmigos.length; i++) {
  const item = document.createElement('li');
  item.textContent = listaDeNomesDosAmigos[i];
  item.id = `amigo-${i}`;      // ID único pra cada amigo
  item.className = 'amigo';    // Mesma classe pra todos
  listaAmigos.appendChild(item);
}
}
//Função que desabilita o botão adicionar e o botão sortear.

 function desabilitaInputEBotoes(){

    document.getElementById("adicionar-amigo").disabled = true;
    document.getElementById("sortearAmigo").disabled = true;
 }

 //Funçãoão que sorteia o nome de um amigo usando a funão Math.random para escolher um
 //número aleatório e multiplica-lo pela quantidade de amigos adicionados e assim 
 // o número obtido é usado para escolher o id de um nome no vetor dessa forma o amigo
 // secreto é sorteado e exibido na tela.

 function sortearAmigo(){
  if (numeroDeAmigosAdicionados == 1 || numeroDeAmigosAdicionados == 0){
    exibirTextoNaTela("h2","Você precisa adicionar pelo menos 2 amigos para o sorteio!");
  
  } else {
   
    let idDoNomeSorteado = parseInt(Math.random() * numeroDeAmigosAdicionados);
    amigoSecreto = listaDeNomesDosAmigos[idDoNomeSorteado];
    exibirTextoNaTela("h2", "Seu amigo secreto é " + amigoSecreto);
    document.getElementById("amigo").placeholder = "Aperte F5 para reiniciar o jogo";
    desabilitaInputEBotoes();
  }
 }
//Função que automatiza a limpeza do campo input.

function limpaCampo(){
    campoRecebeNome = document.querySelector("input");
    campoRecebeNome.value = "";
    
  }

