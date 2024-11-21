// Crear una función que cargue automáticamente una lista con mascotas
const addPets = () => {
    //1. Listado
    const pets=["Perro","Gato", "Conejo", "Ardilla"]
    //2. Obtener elementos del DOM
    const petsLength = document.querySelector('#petsLength')
    const listPets = document.querySelector('#listPets')
    //3. Agregar datos al DOM
    petsLength.innerHTML=pets.length
    let listado= ''
    pets.forEach(pet => {
        listado+=`<li>${pet}</li>`
    })
    listPets.innerHTML=listado
}

const addNumbers = () =>{
    //1. Crear listado
    const numbers=[3, 5, 7, -100, 6, 0, -35, -23, -2, 90]
    //2. Obtener elementos del DOM
    const originalNum = document.querySelector('#originalNum')
    const positiveNum = document.querySelector('#positiveNum')
    const negativeNum = document.querySelector('#negativeNum')
    //3. Agregar datos al DOM
    let originalList= ''
    let positiveList= ''
    let negativeList= ''
    //Recorrer listado
    numbers.forEach(num => {
        originalList+=`| ${num}`
        if(num>=0){
            positiveList+=`| ${num}`
        }else{
            negativeList+=`| ${num}`
        }
    })
    originalNum.innerText=originalList
    positiveNum.innerText=positiveList
    negativeNum.innerText=negativeList
}
addPets()
addNumbers()