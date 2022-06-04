import Consulta from "./main.js";

//generar interaccion
document.getElementById("animal").addEventListener("change", async(event)=>{
    console.log(Consulta())
    console.log(event.target.value)
    const {animales} = await Consulta();
    let animalEncontrado = animales.find((animal)=>{
        return animal.name === event.target.value
    })
    console.log(animalEncontrado)
    console.log(animales)

    document.getElementById("preview").style.backgroundImage=`url(assets/imgs/${animalEncontrado.imagen})`
})