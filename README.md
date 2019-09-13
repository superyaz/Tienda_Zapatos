# Tienda_Zapatos
Entregable sobre una api para tienda de zapatos con Node y Mongo Atlas

Las rutas rutas para ingresar son: 
http://localhost:3000/usuario
http://localhost:3000/producto


# los datos a ingresar en cada ruta son: 
# http://localhost:3000/usuario

    nombre:{
        type: String,
        required:true
    },
    cedula:{
        type:Number,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        required: false,
        default:true
    },
    password:{
        type:String,
        required:true
    }

# http://localhost:3000/producto

    nombre:{
        type: String,
        required:true
    },
    tipo:{
        type: String,
        required:true
    },
    color:{
        type: String,
        required:true
    },
    cantidad:{
        type: String,
        required:true
    },
    fecha:{
        type: Date,
        default:Date.now
    },
    
    
# Los datos almacenados en Mongo Atlas /usuario
   
{"_id":{"$oid":"5d773e116f78e433c885fa7a"},"estado":true,"nombre":"Yazin Castaño Moreno Moreno","cedula":{"$numberInt":"1036335356"},"mail":"yazingeek@gmail.com","password":"$2b$10$6RwFTnVuicXODLgKSqtcOO0Ls116RibEtuwL.uU6NXHl6cGGGL7hO","__v":{"$numberInt":"0"}}

# Los datos almacenados en Mongo Atlas /producto

{"_id":{"$oid":"5d7749321389f5308805b266"},"nombre":"Nike","tipo":"Masculino","color":"azul","cantidad":"1","fecha":{"$date":{"$numberLong":"1568098610278"}},"__v":{"$numberInt":"0"}}
