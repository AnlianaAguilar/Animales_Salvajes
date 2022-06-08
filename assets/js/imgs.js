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
    
    if (nombre=="Lobo"||nombre=="Leon"||nombre=="Oso"||nombre=="Serpiente"||nombre=="Aguila"){
        let animal = new Lobo(nombre,edad,urlImg,comentarios,urlSound)
        if (comentarios&&edad&&nombre){
        lista_animales.push(animal)
        document.getElementById("Animales").innerHTML += animal.generarCard() 
        }else{
            alert("Debe completar todos los Campos")
        }   
    }
/*    else if (nombre=="Leon"){
        let animal = new Leon(nombre,edad,urlImg,comentarios,urlSound)
        if (comentarios&&edad&&nombre){
            lista_animales.push(animal)
            document.getElementById("Animales").innerHTML += animal.generarCard() 
        }else{
            alert("Debe completar todos los Campos")
        }  
    }
    else if (nombre=="Oso"){
        let animal = new Oso(nombre,edad,urlImg,comentarios,urlSound)
        if (comentarios&&edad&&nombre){
            lista_animales.push(animal)
            document.getElementById("Animales").innerHTML += animal.generarCard() 
        }else{
            alert("Debe completar todos los Campos")
        }  
    }
    else if (nombre=="Serpiente"){
        let animal = new Serpiente(nombre,edad,urlImg,comentarios,urlSound)
        if (comentarios&&edad&&nombre){
            lista_animales.push(animal)
            document.getElementById("Animales").innerHTML += animal.generarCard() 
        }else{
            alert("Debe completar todos los Campos")
        }  
    }
    else if (nombre=="Aguila"){
        let animal = new Aguila(nombre,edad,urlImg,comentarios,urlSound)
        if (comentarios&&edad&&nombre){
            lista_animales.push(animal)
            document.getElementById("Animales").innerHTML += animal.generarCard() 
        }else{
            alert("Debe completar todos los Campos")
        }   
    }*/
    
    //limpiarcampos despues de registrar
    limpiarCampos()
    //console.log("participante",lista_animales) 

 })
 

 window.showModal =function (nombre) {
    //alert(nombre)
    let modalbody = document.querySelector(".modal-body")
    let animalesModal = lista_animales.find((animal)=>animal.nombre==nombre)
    console.log(animalesModal)
    console.log(lista_animales)
    modalbody.innerHTML= `<div class="col">
                            <div class="card border-0">
                                <img src="${animalesModal.img}" class="img-fluid" data-dismiss="modal" style="width: 19rem;"alt="...">
                                <div class="card-body bg-dark text-white text-center fs-6 fw-light text_modal">
                                    <p class="card-titl">${animalesModal.edad}</p>
                                    <p class="card-title">Comentarios</p><br/> 
                                    <p class="card-title">${animalesModal.comentarios}</p>                                                                 
                                </div>
                            </div>
                        </div>`
    console.log(modalbody)
 }


window.playSound = function(nombre){ //se coloca window para publico ya que se esta trabajando con module.
    console.log(nombre)
    let animalesSound = lista_animales.find((animal)=>animal.nombre==nombre)
    
    if(nombre=="Leon"){
        animalesSound.rugir()
    }
    else if (nombre=="Lobo"){
        animalesSound.aullar()
    }
    else if (nombre=="Oso"){
        animalesSound.gruñir()
    }
    else if (nombre=="Serpiente"){
        animalesSound.sisear()
    }
    else if (nombre=="Aguila"){
        animalesSound.chillar()
    }
   
}

function limpiarCampos(){
    document.getElementById("animal").value=""
    document.getElementById("edad").value=""
    document.getElementById("comentarios").value=""
    document.getElementById("preview").style.backgroundImage=""
}
