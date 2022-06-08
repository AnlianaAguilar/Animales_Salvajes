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
        `<div class="col-md-3">
            <div class="card">
                <a onclick="showModal('${this.nombre}')" data-toggle="modal" data-target="#exampleModal"><img src="${this.img}" class="img-fluid" alt="..."><a/>
                <div class="card-body">                    
                    <button type="button" class="btn btn-dark" onclick="playSound('${this.nombre}')">sonido</button>
                </div>
            </div>
        </div>`
        return card
    }


}

// <h5 class="card-title">${this.nombre}</h5>