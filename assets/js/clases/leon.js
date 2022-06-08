import Animal from "./animal.js";

export default class Leon extends Animal{
    constructor(nombre, edad,img,comentarios,sonido, rugir){
        super(nombre, edad,img,comentarios,sonido)
        this._rugir = ()=> rugir
        
    }

    rugir(){
        let player = document.getElementById("player")
        player.setAttribute("src",this.sonido)
        player.play()
    }
}