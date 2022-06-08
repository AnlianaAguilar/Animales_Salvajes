export default class Animal{
    constructor(nombre, edad,img,comentarios,sonido){
        this._nombre = ()=>nombre
        this._edad = ()=>edad
        this._img = ()=>img
        this._comentarios = ()=>comentarios
        this._sonido = ()=>sonido
    }

    get nombre(){
        return this._nombre()
    }

    get edad(){
        return this._edad()
    }

    get img(){
        return this._img()
    }

    get comentarios(){
        return this._comentarios()
    }

    set comentarios(new_comentario){
        return this._comentarios = ()=>new_comentario
    }

    get sonido(){
        return this._sonido()
    }

    generarCard(){
        let card = 
        `<div class="col-md-4">
            <div class="card">
                <a onclick="showModal('${this.nombre}')" data-toggle="modal" data-target="#exampleModal"><img src="${this.img}" class="img-fluid" alt="..."><a/>
                <button id="button_modal" type="button" class="btn btn-secondary" onclick="playSound('${this.nombre}')"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>`
        return card
    }

}

