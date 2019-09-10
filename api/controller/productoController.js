var Producto = require('./../models/productoModels');

let index = (req, res)=>{

    Producto.find({}).exec((err, datos)=>{
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
    let producto = new Producto({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        color: req.body.color,
        cantidad: req.body.cantidad,
    
    });
    producto.save((err, productoNew)=>{
        if(err){
            return res.status(404).json({
                ok:false, 
                err
            });
        }
        return res.status(200).json({
            ok:true,
            producto: productoNew
        });
    })
}


let ver = (req, res)=>{
    Producto.findById(req.params.id).exec((err, datos)=>{
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
    let producto = {
        nombre:req.body.nombre,
        tipo:req.body.tipo,
        color:req.body.color,
        cantidad:req.body.cantidad,
        fecha:req.body.fecha,
    }
/**
 * Busca el usuario por id  y me retorna el nuevo usuario con el metodo {new : true}
*/
    Producto.findByIdAndUpdate(req.params.id, producto,{new : true}, (err, productoNew)=>{
        if(err){
            return res.status(404).json({
                ok:false,
                err
            });
        }
        return res.json({
            ok:true,
            productoNew,
        });
    });
}


let eliminar = (req, res)=>{
    Producto.findByIdAndUpdate(req.params.id, {estado : req.params.estado},{new : true}, (err, productoNew)=>{
        if(err){
            return res.status(404).json({
                ok:false,
                err
            });
        }
        return res.json({
            ok:true,
            productoNew,
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