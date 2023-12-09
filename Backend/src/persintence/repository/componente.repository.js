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
        console.log(Object.keys(Componente.__proto__));
        
        const seccion = await Seccion.findOne({
            where: {id: seccionId},
            include: Componente
        })

        seccion.addComponente(newComponente)

        return newComponente
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getComponentesSeccion_(seccionId){
    try {
        const seccion = await Seccion.findOne({
            where: {id: seccionId},
            include: Componente
        })
        
        const comps = seccion.componentes.length > 0 ? seccion.componentes: [];

        return comps
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateComponente_(componente){
    const { id, name, description, image } = componente
    try {
        const componente_update = await Componente.findByPk(id);
        console.log(componente_update)
        componente_update.name = name;
        componente_update.description = description;
        componente_update.image = image;
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

export async function getComponente_(id){
    try {
        const componente = await Componente.findOne({
            where: { id },
            attributes: ["id", "name", "description", "image"],
        });
        return componente
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}