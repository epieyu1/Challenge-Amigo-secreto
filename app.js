// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se almacenarán los nombres de amigos
let amigos = [];

function agregarAmigo(){
    let inptuAmigo = document.getElementById('amigo');
    let nombreAmigo = inptuAmigo.value.trim();

    if(nombreAmigo === ''){
        alert('Ingresa un nombre')
    }

    amigos.push(nombreAmigo);
    inptuAmigo.value = '';
    inptuAmigo.focus();
    anezarAmigos()
    console.log(amigos);
    return;

}

function anezarAmigos(){
   let listaAmigos = document.getElementById('listaAmigos'); 
   listaAmigos.innerHTML = '';

   for(let i=0; i < amigos.length; i++){
    let item = document.createElement('li');
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
    

   }

}

function sortearAmigo() {

    if (amigos === 0 ) {

        alert('Ingresa los nimbres de tus amigos');
        return;
    }

   let indiceAleatorio = Math.floor(Math.random() * amigos.length);
   let amigoGanador = amigos[indiceAleatorio];

   document.getElementById('resultado').innerHTML = `El amigo ganador es ${amigoGanador}`

   let limpiarinput = document.getElementById('listaAmigos');
    limpiarinput.innerHTML = '';

   return;
}