// ARROW FUNCTION para conectarnos a una API y mostrar una imagen aleatoria de un perro
const cargarImagen = async () => {
    try {
        //1. Obtener datos desde API
        const url= 'https://dog.ceo/api/breeds/image/random'
        const res= await fetch(url)
        //2. Parsear a JSON
        const data = await res.json()
        //3. Agregar IMG al DOM
        const imgRandomDog = document.querySelector('#imgRandomDog')
        imgRandomDog.src=data.message
        imgRandomDog.alt="Perro random"
        imgRandomDog.style.maxHeight='400px'

    } catch (error) {
        alert("No se puede cargar la imagen")
    }
}
cargarImagen()