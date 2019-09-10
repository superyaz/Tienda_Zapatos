var Usuario = require('./../models/usuarioModels');
var bcrypt = require('bcrypt');



let index = (req, res)=>{
    
    Usuario.find({}).exec((err, datos)=>{
        if(err){
            return res.status(404).json({
                ok:false,
                err
            });
        }
        return res.status(200).json({
            ok:true,
            datos
        })
    })
}

let guardar = (req, res)=>{
    let usuario = new Usuario({
        nombre: req.body.nombre,
        cedula:req.body.cedula,
        mail:req.body.mail,
        password:bcrypt.hashSync(req.body.mail, 10)
    });
    usuario.save((err, usuarioNew)=>{
        if(err){
            return res.status(404).json({
                ok:false, 
                err
            });
        }

        return res.status(200).json({
            ok:true, 
            usuario: usuarioNew
        });
    })

}


let ver = (req, res)=>{

    Usuario.findById(req.params.id).exec((err, datos)=>{
        if(err){
            return res.status(404).json({
                ok:false,
                err
            });
        }
        return res.json({
            datos
        });
    });

}

let modificar = (req, res)=>{
    let usuario = {
        nombre:req.body.nombre,
        cedula:req.body.cedula,
        mail:req.body.mail,
        password:bcrypt.hashSync(req.body.mail, 10),
    }
/**
 * Busca el usuario por id  y me retorna el nuevo usuario con el metodo {new : true}
*/
    Usuario.findByIdAndUpdate(req.params.id, usuario,{new : true}, (err, usuarioNew)=>{
        if(err){
            return res.status(404).json({
                ok:false,
                err
            });
        }
        return res.json({
            ok:true,
            usuarioNew,
        });
    });
}

let eliminar = (req, res)=>{
    Usuario.findByIdAndUpdate(req.params.id, {estado : req.params.estado},{new : true}, (err, usuarioNew)=>{
        if(err){
            return res.status(404).json({
                ok:false,
                err
            });
        }
        return res.json({
            ok:true,
            usuarioNew,
        });
    });
}



module.exports = {
    index, 
    guardar,
    ver,
    modificar,
    eliminar
}