// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se almacenarán los nombres de amigos
let amigos = [];

function agregarAmigo(){
    let agregarAmigos = document.getElementById('amigo');
    nombreAmigos = agregarAmigos.value.trim();

    if(nombreAmigos === ''){
        alert('Ingresa un nombre valido')
    } else {
        amigos.push(nombreAmigos);
        agregarAmigos.value = ''; // aqui limpiamos la entrada del input con la propiedad value = ''
        console.log(amigos);
        return;
    }
};

function sortearAmigo(){ 
    if(amigos.length === 0){
        alert('ingresa una lista de amigos')

        return;
    }
        
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        let indiceAmigo = amigos[indiceAleatorio];

        document.getElementById('resultado').innerHTML = 'El amigo ganador es:' + indiceAmigo;

    
}