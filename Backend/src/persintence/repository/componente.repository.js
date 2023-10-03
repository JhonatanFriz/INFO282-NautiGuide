import { Componente } from "../models/Componente.js";

export async function createComponente_(componente){
    const { name, description, image, componenteBarcoId} = componente
    try {
        const newComponente = await Componente.create({
            componenteBarcoId,
            name,
            description,
            image,
          });
          return newComponente
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getComponente_(id){
    try {
        const componente = await Componente.findOne({
            where: { id },
            attributes: ["id", "name", "description", "image", "componenteBarcoId"],
        });
        return componente
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateComponente_(componente){
    const { id, name, description, image } = componente
    try {
        const componente_update = await componente.findByPk(id);
        console.log(componente_update)
        componente_update.name = name;
        componente_update.description = description;
        componente_update.multimedia = multimedia;
        await componente_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}

export async function deleteComponente_(id){
    try {
        await Componente.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}