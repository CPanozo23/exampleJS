//Función para crear un menú automáticamente: Sin parámetro ni retorno
function cargarMenu(){
    //1. Crear arreglo
    const navOption = [
        {texto: "HOME", url:"index.html"},
        {texto: "Funciones", url:"funciones.html"},
        {texto: "Ciclos y condiciones", url:"cc.html"},
        {texto: "Objetos", url:"objetos.html"},
    ]
    //2. Llamar al elemento del DOM
    const menuHTML = document.querySelector("#navbar")
    //3. Cargar html en el elemento del DOM
    navOption.forEach(option => {
        menuHTML.innerHTML+=`<li><a href=${option.url}>${option.texto}</a></li>`
    })
}

cargarMenu()