import Consulta from "./main.js";
import Animal from "./clases/animal.js";
import Lobo from "./clases/lobo.js";
import Aguila from "./clases/aguila.js";
import Leon from "./clases/leon.js";
import Serpiente from "./clases/serpiente.js";
import Oso from "./clases/oso.js";


//generar interaccion cuando el usuario selecciona un animal
document.getElementById("animal").addEventListener("change", async(event)=>{  
    //console.log(Consulta())
    //console.log(event.target.value)
    const {animales} = await Consulta();
    let animalEncontrado = animales.find((animal)=>{
        return animal.name === event.target.value // el valor del nombre donde el usuario esta ejecutendo el evento change
    })
    //console.log(animalEncontrado)
    //console.log(animales)

    document.getElementById("preview").style.backgroundImage=`url(assets/imgs/${animalEncontrado.imagen})`

    // const animalIngestigacion = new Animal(animales.nombre, animales.edad, animales.preview, animales.comentarios)
    // console.log(animalIngestigacion)

})

let lista_animales = [];
document.getElementById("btnRegistrar").addEventListener("click", async ()=>{


    let nombre = document.getElementById("animal").value
    let edad = document.getElementById("edad").value
    let comentarios = document.getElementById("comentarios").value
    
    const {animales} = await Consulta();
    let animalEncontrado = animales.find((animal)=>{
        return animal.name === nombre // el valor del nombre donde el usuario esta ejecutendo el evento change
    })
    console.log(animalEncontrado)
   
    let urlImg = "assets/imgs/"+ animalEncontrado.imagen
    let urlSound = "assets/sounds/" + animalEncontrado.sonido
    
    if (nombre=="Lobo"){
        let animal = new Lobo(nombre,edad,urlImg,comentarios,urlSound)
        lista_animales.push(animal)
        document.getElementById("Animales").innerHTML += animal.generarCard() 
    }
    else if (nombre=="Leon"){
        let animal = new Leon(nombre,edad,urlImg,comentarios,urlSound)
        lista_animales.push(animal)
        document.getElementById("Animales").innerHTML += animal.generarCard() 
    }
    else if (nombre=="Oso"){
        let animal = new Oso(nombre,edad,urlImg,comentarios,urlSound)
        lista_animales.push(animal)
        document.getElementById("Animales").innerHTML += animal.generarCard() 
    }
    else if (nombre=="Serpiente"){
        let animal = new Serpiente(nombre,edad,urlImg,comentarios,urlSound)
        lista_animales.push(animal)
        document.getElementById("Animales").innerHTML += animal.generarCard() 
    }
    else if (nombre=="Aguila"){
        let animal = new Aguila(nombre,edad,urlImg,comentarios,urlSound)
        lista_animales.push(animal)
        document.getElementById("Animales").innerHTML += animal.generarCard() 
    }
   
    //console.log("newAnimal",newAnimal)
    console.log("participante",lista_animales) 
    // document.getElementById("Animales").innerHTML += newAnimal.generarCard() 

    //console.log("Variables",nombre, edad, comentarios, preview)
    


 })
 

 window.showModal =function (nombre) {
    //alert(nombre)
    let modalbody = document.querySelector(".modal-body")
    let animalesModal = lista_animales.find((animal)=>animal.nombre==nombre)
    console.log(animalesModal)
    console.log(lista_animales)
     modalbody.innerHTML= `<div class="col">
                            <div class="card">
                                <img src="${animalesModal.img}" class="img-fluid" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${animalesModal.nombre}</h5>
                                    <h5 class="card-title">${animalesModal.edad}</h5>                             
                                </div>
                            </div>
                        </div>`
                        console.log(modalbody)
 }


window.playSound = function(nombre){
    console.log(nombre)
    let animalesSound = lista_animales.find((animal)=>animal.nombre==nombre)
   if(nombre=="Leon"){
        animalesSound.rugir()
   }
}