import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/universidad',{})
.then(()=> console.log("Conectado a MongoDB"))
.catch((err)=> console.log(err))

const esquema = mongoose.Schema({
    Nombre:String,
    Apellido: String,
    Profesion: String,
    Edad: Number,
}, {versionKey:false})

const modelo = mongoose.model('docentes', esquema)

//Consultas
async function consultar(){
    let documentos = await modelo.find({Nombre: "Felipe"})
    console.log(documentos)
}

async function consultar1(){
    let documentos = await modelo.find({Edad:{$gt:35}})
    console.log(documentos)
}

const consultaEsp = async () => {
    let documento = await modelo.findById('6359cc2446a3ef6c3feceb4e')
    console.log(documento)
}

const insertar = async () => {
    let documento = new modelo({
        _id:5490,
        Nombre:"Alejandro",
        Apellido:"Raynaud",
        Profesion: "Ingeniero",
        Edad:28
    })
    await documento.save()
}
async function eliminar(){
    let documento = await modelo.deleteOne({_id:35})// o deleteMany 
}

const actualizar = async () => {
    let documento = await modelo.updateMany({Nombre:"Nicolas"},{
        $set:{
            Nombre:"Jonier",
            Edad:25
        }
    })
}

export {consultar, consultaEsp, insertar, eliminar, actualizar}