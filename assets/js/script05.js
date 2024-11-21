//Función para mostrar a alumnos con sus notas, promedio y situación final
const calcularPromedio = () => {
    //1. Listado
    const notas = [
        { name: "Jose", nota1: 5, nota2: 4, nota3: 10 },
        { name: "Maria", nota1: 6, nota2: 7, nota3: 8 },
        { name: "Carlos", nota1: 3, nota2: 4, nota3: 5 },
        { name: "Ana", nota1: 9, nota2: 8, nota3: 10 },
        { name: "Pedro", nota1: 4, nota2: 5, nota3: 6 },
        { name: "Lucia", nota1: 6, nota2: 7, nota3: 6 },
        { name: "Raul", nota1: 7, nota2: 6, nota3: 8 },
        { name: "Laura", nota1: 8, nota2: 9, nota3: 7 },
        { name: "Juan", nota1: 4, nota2: 4, nota3: 5 },
        { name: "Isabel", nota1: 7, nota2: 7, nota3: 7 }
    ]
    //2. Obtener elemento del DOM
    const resultados = document.querySelector('#resultados')
    //3. Agregar datos al DOM
    let dataList= '<tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Promedio</th><th>Estado</th></tr>'
    //Recorrer Listado
    notas.forEach(alumno => {
        const promedio = (alumno.nota1+ alumno.nota2+alumno.nota3) / 3
        const estado = promedio >= 6 ? "Aprueba" : "Reprueba"
        dataList+=`<tr><td>${alumno.name}</td><td>${alumno.nota1}</td><td>${alumno.nota2}</td><td>${alumno.nota3}</td><td>${promedio.toFixed(1)}</td><td>${estado}</td></tr>`
    })

    resultados.innerHTML=dataList
}

calcularPromedio()