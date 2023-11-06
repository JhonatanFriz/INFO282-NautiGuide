import { Seccion } from "../models/Seccion.js";
import { Barco } from "../models/Barco.js";
import { sequelize } from "../database/database.js";

export async function createSeccion_(seccion){
    const { name, description, image} = seccion
    try {
        const newSeccion = await Seccion.create({
            name,
            description,
            image,
        });
        
        // Añade la sección a todos los barcos
        const barcos = await Barco.findAll();
        for (const barco of barcos) {
            await newSeccion.addBarco(barco);
        }

        return newSeccion
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getSecciones_(){
    try {
        const seccion = await Seccion.findAll({
            attributes: ["id", "name", "description", "image"],
            order: [["id", "DESC"]],
        });
        return seccion
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getSeccion_(id){
    try {
        const seccion = await Seccion.findOne({
            where: { id },
            attributes: ["id", "name", "description", "image"],
        });

        return seccion
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateSeccion_(seccion){
    const { id, name, description, image } = seccion
    try {
        const seccion_update = await Seccion.findByPk(id);
        console.log(seccion_update)
        seccion_update.name = name;
        seccion_update.description = description;
        seccion_update.image = image;
        await seccion_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}

export async function deleteSeccion_(id){
    try {
        await Seccion.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getSeccionComponentes_(id){
    try {
        const tasks = await Seccion.findAll({
            attributes: ["id", "name", "description", "image", "seccionId"],
            where: { seccionId: id },
          });
          return tasks;
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function unir_barco_seccion_(id,contenido){
    const { name, description, image} = contenido
    try {
        const newSeccion = await Seccion.create({
            name,
            description,
            image,
        });
        newSeccion.addBarco(id)
        return newSeccion
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function llamar_barco_seccion_(id){
    try {

        // Busca el barco con la id
        const barco = await Barco.findAll({
            where: { id: id},
            include: Seccion
        });

        // Se queda con el parametro secciones de ese barco
        const secciones = barco.length > 0 ? barco[0].secciones : [];

        // Agregar función para agregar todas las secciones que no están relacionadas a ningún barco
        //const seccionesSinAsociar = await Seccion.findAll({
        //    order: [["id", "DESC"]],
        //});
        // Juntar esas secciones_sin_barco con secciones

        return secciones 
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}
