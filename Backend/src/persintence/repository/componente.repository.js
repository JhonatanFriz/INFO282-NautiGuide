import { Componente } from "../models/Componente.js";
import { Seccion } from "../models/Seccion.js"
import { sequelize } from "../database/database.js";

export async function createComponente_(contenido, seccionId){
    const { name, description, image } = contenido
    try {
        const newComponente = await Componente.create({
            name,
            description,
            image,
        });
        
        newComponente.addSeccion(seccionId)
        return newComponente
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getComponente_(seccionId){
    try {
        const seccion = await Seccion.findAll({
            where: {id: seccionId},
            include: Componente
        })

        const componentes = seccion.length > 0 ? seccion[0].secciones: [];

        //const componente = await Componente.findOne({
        //    where: { id },
        //    attributes: ["id", "name", "description", "image"],
        //});
        return componentes
        
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