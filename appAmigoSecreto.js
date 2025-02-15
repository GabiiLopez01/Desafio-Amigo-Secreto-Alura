let listaAmigoIncorporados = [];
let numeroMaximoAmigoIncorporado = 10;


function agregarNombre(){
    let inputNombre = document.getElementById("input-nombre").value.trim();

    if (inputNombre === "" || listaAmigoIncorporados.includes(inputNombre)) {
        alert ("Por favor, ingresa un nombre válido y no repetido.");
        return;
    }
    if (listaAmigoIncorporados.length >= numeroMaximoAmigoIncorporado) {
        alert("Haz alcanzado el límite de nombres permitidos.");
    }

    listaAmigoIncorporados.push(inputNombre);
    document.getElementById("input-nombre").value = "";
    mostrarLista();
}

function mostrarLista(){
    let listaInicial = document.getElementById("lista-nombres");
    listaInicial.innerHTML = "";

    for(let i = 0; i < listaAmigoIncorporados.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaAmigoIncorporados[i];
        listaInicial.appendChild(item);
    
    /* listaAmigoIncorporados.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaInicial.appendChild(li);
    */ 
    }
}


function sortearAmigo() {
    if (listaAmigoIncorporados.length === 0) {
        alert("La lista esta vacía. Agrega nombres antes de sortear");
        return;
    
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigoIncorporados.length);
    let amigoSecreto = listaAmigoIncorporados[indiceAleatorio];
    document.getElementById ("resultado").textContent = `Tu amigo secreto es: ${amigoSecreto}`;
}