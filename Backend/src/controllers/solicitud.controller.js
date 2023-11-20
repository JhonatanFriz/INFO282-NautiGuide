import { Solicitud } from "../persintence/models/Solicitud.js";
import {
    createSolicitud_,
    getSolicitudes_,
    deleteSolicitud_,
    getSolicitud_,
    getSolicitudUsuario_
} from "../persintence/repository/solicitud.repository.js";

export async function createSolicitud(req,res) {
    const {title,date,description,userId} = req.body;
    const solicitud = {
        title,date,description,userId
    }
    createSolicitud_(solicitud).then(data => {
        res.status(200).json({status : true, data : data})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    })
}

export async function getSolicitudes(req, res) {
    getSolicitudes_().then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
}

export async function deleteSolicitud(req, res) {
    const { id } = req.params;
    deleteSolicitud_(id).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    }) 
};

export async function getSolicitud(req, res) {
    const { id } = req.params;
    getSolicitud_(id).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    }) 
};

export async function getSolicitudUsuario(req, res) {
    const { id } = req.params;
    getSolicitudUsuario_(id).then(msg=> {
        res.status(200).json({status : true, msg : msg})
    }, error => {
        res.status(400).json({status : false, error : error.message })
    }) 
};