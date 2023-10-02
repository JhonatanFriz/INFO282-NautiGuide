import { Subcomponente } from "../models/Subcomponente.js";

export async function createSubcomponente_(subcomponente){
    const { name, description, multimedia, componenteBarcoId} = subcomponente
    try {
        const newSubcomponente = await Subcomponente.create({
            componenteBarcoId,
            name,
            description,
            multimedia,
          });
          return newSubcomponente
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getSubcomponente_(id){
    try {
        const subcomponente = await Subcomponente.findOne({
            where: { id },
            attributes: ["id", "name", "description", "image", "componenteBarcoId"],
        });
        return subcomponente
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateSubcomponente_(subcomponente){
    const { id, name, description, multimedia } = subcomponente
    try {
        const subcomponente_update = await Subcomponente.findByPk(id);
        console.log(subcomponente_update)
        subcomponente_update.name = name;
        subcomponente_update.description = description;
        subcomponente_update.multimedia = multimedia;
        await subcomponente_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}

export async function deleteSubcomponente_(id){
    try {
        await Subcomponente.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}