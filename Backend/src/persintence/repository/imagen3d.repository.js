import { Imagen3d } from "../models/Imagen3d.js";
import { Seccion } from "../models/Seccion.js";

export async function createImagen3d_(imagen){
    const {url,seccionId} = imagen
    try{
        const newImagen3d = await Imagen3d.create({
            url,
            seccionId
        });
        return newImagen3d
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function deleteImagen3d_(id){
    try {
        await Imagen3d.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function getImagen3d_(idSeccion){
    try {
        const imagen3d = await Imagen3d.findOne({
            where: { seccionId: idSeccion},
            attributes: ["url","seccionId"],     
        })
        return imagen3d
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function updateImagen3d_(imagen){
    const { id, url } = imagen
    try {
         
        const imagen3d_update = await Imagen3d.findByPk(id);
        console.log(imagen3d_update)
        imagen3d_update.url = url;
        await imagen3d_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}