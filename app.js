// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];
let emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];
let emojisUsados = [];


// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    let nombre = input.value.trim().toUpperCase();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    nombre = verificarNombreDuplicado(nombre);
    const emoji = obtenerEmojiAleatorio();

    amigos.push({nombre, emoji});
    actualizarListaAmigos();
    input.value = '';
    input.focus();
}

// Función para verificar si el nombre ya existe en la lista
function verificarNombreDuplicado(nombre) {
    let nombreOriginal = nombre;
    let contador = 1;
    let duplicadoEncontrado = false;

    while (amigos.some(amigo => amigo.nombre === nombre)) {
        nombre = `${nombreOriginal} - ${contador}`;
        contador++;
        duplicadoEncontrado = true;
    }

    if ( duplicadoEncontrado === true) {
        alert('El nombre ingresado ya existe en la lista, se ha agregado un número al final para diferenciarlo.');
    }

    return nombre;
}

// Función para obtener un emoji aleatorio
function obtenerEmojiAleatorio() {
    let emoji = emojis[Math.floor(Math.random() * emojis.length)];
    while (emojisUsados.includes(emoji)) {
        emoji = emojis[Math.floor(Math.random() * emojis.length)];
    }
    emojisUsados.push(emoji);
    return emoji;
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo.emoji} ${amigo.nombre}`;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length <= 1) {
        alert('No hay amigos suficientes en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

        //Eliminar el amigo sorteado de la lista de amigos
        amigos = amigos.filter((amigo, index) => index !== indiceAleatorio);
        actualizarListaAmigos();
        emojisUsados = [];

// Mostrar un contador de tiempo de 5 segundos antes de mostrar el resultado
    const resultado = document.getElementById('resultado');
    let contador = 5;
    resultado.innerHTML = `<li>El amigo secreto se revelará en: <strong>${contador}</strong></li>`;

    const intervalo = setInterval(() => {
        contador--;

        if (contador < 0) {
            clearInterval(intervalo);
            resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado.emoji} ${amigoSorteado.nombre}</strong></li>`;
        } else {
            resultado.innerHTML = `<li>El amigo secreto se revelará en: <strong>${contador}</strong></li>`;
        }
    }, 1000);
}
 /*    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado.emoji} ${amigoSorteado.nombre}</strong></li>`;
}*/