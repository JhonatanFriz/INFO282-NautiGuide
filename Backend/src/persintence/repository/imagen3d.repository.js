import { Imagen3d } from "../models/Imagen3d.js";
import { Seccion } from "../models/Seccion.js";

export async function createImagen3d_(imagen){
    const {image,seccioneId} = imagen
    try{
        const newImagen3d = await Imagen3d.create({
            seccioneId,
            image,
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
        const img = await Imagen3d.findOne({
            where: { seccioneId: idSeccion},
        })
        return img
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function updateImagen3d_(imagen){
    const { id, image } = imagen
    try {
        console.log(id);
        console.log(image);
        const imagen3d_update = await Imagen3d.findByPk(id);
        imagen3d_update.image = image;
        await imagen3d_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}