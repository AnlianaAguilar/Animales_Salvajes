import Animal from "./animal.js";

export default class Oso extends Animal{
    constructor(nombre, edad,img,comentarios,sonido, gruñir){
        super(nombre, edad,img,comentarios,sonido)
        this._gruñir = ()=> gruñir
        
    }

    gruñir(){
        let player = document.getElementById("player")
        player.setAttribute("src",this.sonido)
        player.play() 
    }
}