import { Imagen3d } from "../persintence/models/Imagen3d.js";
import {
    createImagen3d_,
    getImagen3d_,
    deleteImagen3d_,
    updateImagen3d_
} from "../persintence/repository/imagen3d.repository.js";

export async function createImagen3d(req, res) {
    const { url, seccionId } = req.body;
    const imagen3d = { 
      url,
      seccionId
    }
    createImagen3d_(imagen3d).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    }) 
}

export async function deleteImagen3d(req, res) {
    const { id } = req.params;
    deleteImagen3d_(id).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
};

export async function updateImagen3d(req, res) {
    const { id } = req.params;
    const { url, seccionId } = req.body;
    const imagen3d = { 
        id,
        url,
        seccionId
    }
    updateImagen3d_(imagen3d).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
};

export async function getImagen3d(req, res) {
    const { seccionId } = req.params;
    getImagen3d_(seccionId).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
}