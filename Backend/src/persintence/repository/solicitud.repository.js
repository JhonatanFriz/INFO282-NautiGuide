import { Solicitud } from "../models/Solicitud.js";
import { User } from "../models/User.js";

export async function createSolicitud_(solicitud){
    const {title,date,description,userId} = solicitud
    try{
        const newSolicitud = await Solicitud.create({
            userId,
            title,
            date,
            description
        });
        return newSolicitud
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function getSolicitudes_(){
    try {
        const solicitudes = await Solicitud.findAll({
            attributes: ["id", "title", "date", "description", "userId"],
            order: [["id", "DESC"]],
        });
        return solicitudes
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function deleteSolicitud_(id){
    try {
        await Solicitud.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function getSolicitud_(id){
    try {
        const solicitud = await Solicitud.findOne({
            where: { id },
            attributes: ["id", "title", "date", "description", "userId"],
        });
        return solicitud
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function getSolicitudUsuario_(idUsuario){
    try {
        const solicitudes = await Solicitud.findAll({
            where: { userId: idUsuario},
            attributes: ["id", "title", "date", "description", "userId"]       
        })
        return solicitudes
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}