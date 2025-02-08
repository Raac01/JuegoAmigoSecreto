// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//RESOLUCION REALIZADA POR : Ricardo Albert Amaya Correa
let listaNombres=[];

function agregarAmigo(){

    document.getElementById("resultado").textContent = "";

    let nombre=document.getElementById('amigo').value.trim();
    if (typeof nombre==='string' && nombre.trim().length>0 && isNaN(nombre)){
        
        listaNombres.push(nombre);
        nuevoEnLista("listaAmigos",nombre)
    
        // Limpiar el input después de agregar
        document.getElementById('amigo').value = "";

    }else{

         alert("Ingresa un nombre valido, por favor");       
         document.getElementById('amigo').value = "";

    }

}
function nuevoEnLista(id,nombre){
    let lista = document.getElementById(id);
    let nuevoElemento = document.createElement("li"); // Crear un
    nuevoElemento.textContent = nombre; // Asignar el nombre como texto
    lista.appendChild(nuevoElemento);
}
function sortearAmigo(){
    if (listaNombres.length===0){
        alert('La lista esta vacia, agrega amigos primero');
        return;
    }

    let indice =Math.floor(Math.random()*listaNombres.length);
    let amigoSelec = listaNombres[indice];
    //limpiamos lista de amigos
    document.getElementById("listaAmigos").textContent = "";

    nuevoEnLista("resultado",`El amigo sorteado es: ${amigoSelec}`);
    //limpiamos lista antes de que  se vuelva a realizar el juego
    listaNombres=[];
}
