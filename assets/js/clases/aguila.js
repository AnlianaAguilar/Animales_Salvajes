import Animal from "./animal.js";

export default class Aguila extends Animal{
    constructor(nombre, edad,img,comentarios,sonido){
        super(nombre, edad,img,comentarios,sonido)
       
    }

    chillar(){
        let player = document.getElementById("player")
        player.setAttribute("src",this.sonido)
        player.play()      
    }
}