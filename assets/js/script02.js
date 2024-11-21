//Función para cambiar background-color: Con 1 parámetro y sin retorno
function cambiarBG(color) {
    //1. Llamar al elemento del DOM
    const bg = document.querySelector("body")
    //2. Modificar el estilo
    bg.style.backgroundColor = color
}

/////////////////////////////////////////////////////////
//Función para agregar borde a imágenes: Con múltiple parámetro y sin retorno
function addBorder(element1, element2, element3, color1, color2, color3) {
    //1. Buscar elementos del DOM
    const ele1 = document.querySelector(`#${element1}`)
    const ele2 = document.querySelector(`#${element2}`)
    const ele3 = document.querySelector(`#${element3}`)
    //2. Modificar style
    ele1.style.border = `2px solid ${color1}`
    ele2.style.border = `2px solid ${color2}`
    ele3.style.border = `2px solid ${color3}`
}
//Función anónima que llamará a addBorder
//1. Llamar al elemento del DOM que tiene el evento
const btnAddBorder = document.querySelector('#agregarBorde')
//2. Agregar evento
btnAddBorder.addEventListener("click", function () {
    addBorder('img-border1', 'img-border2', 'img-border3', 'red', 'green', 'blue')
})


/////////////////////////////////////////////////////////
//Función para quitar borde a imágenes: Con múltiple parámetro y sin retorno
function deleteBorder(element1, element2, element3) {
    //1. Buscar elementos del DOM
    const ele1 = document.querySelector(`#${element1}`)
    const ele2 = document.querySelector(`#${element2}`)
    const ele3 = document.querySelector(`#${element3}`)
    //2. Modificar style
    ele1.style.border = `none`
    ele2.style.border = `none`
    ele3.style.border = `none`
}
//Función anónima que llamará a deleteBorder
//1. Llamar al elemento del DOM que tiene el evento
const btnDelBorder = document.querySelector('#eliminarBorde')
//2. Agregar evento
btnDelBorder.addEventListener("click", function () {
    deleteBorder('img-border1', 'img-border2', 'img-border3')
})

/////////////////////////////////////////////////////////
//Función para realizar cálculos: Sin parámetro y con retorno
function calcular() {
    //1. Buscar elementos del DOM
    //Debe utilizar parseFloat en vez de Number para que sí funcione isNaN, ya que Number el campo vacío lo convierte en cero
    const num1 = parseFloat(document.querySelector('#num1').value)
    const num2 = parseFloat(document.querySelector('#num2').value)
    const operacion = document.querySelector('#operation').value
    let resultado
    //2. Verificar campos numérico
    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Debes ingresar números válidos."
    }
    //return corta el proceso, no se realiza lo que está después

    //3. Realizar operación
    /*if (operacion==="sumar"){
        resultado = num1 + num2
    }else if (operacion==="restar") {
        resultado = num1 - num2
    }else if (operacion==="multiplicar") {
        resultado = num1 * num2
    }else if (operacion==="dividir") {
        resultado = num1 / num2
    } else {
        resultado=0
    }*/
    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2
            break
        case 'restar':
            resultado = num1 - num2
            break
        case 'multiplicar':
            resultado = num1 * num2
            break
        case 'dividir':
            if (num2 === 0) {
                return "Error: No se puede dividir por cero"
            }
            resultado = num1 / num2
            break
        default:
            //No es obligatorio el default (es el ELSE en if)
            resultado= "Error: No seleccionó una operación válida"
            break
    }

    return `Resultado: ${resultado}`
}

//1. Llamar al elemento del DOM que tiene el evento
const btnCalcular = document.querySelector('#calcular')
//2. Agregar evento
btnCalcular.addEventListener("click", function () {
    const resultado = calcular()
    document.querySelector('#result').innerText= resultado
})
