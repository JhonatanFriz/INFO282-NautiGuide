import { ComponenteBarco } from "../models/ComponenteBarco.js";

export async function createComponenteBarco_(componenteBarco){
    const { name, description, image, barcoId} = componenteBarco
    try {
        const newComponenteBarco = await ComponenteBarco.create({
            barcoId,
            name,
            description,
            image,
          });
          return newComponenteBarco
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function getComponenteBarco_(id){
    try {
        const componenteBarco = await ComponenteBarco.findOne({
            where: { id },
            attributes: ["id", "name", "description", "image", "barcoId"],
        });
        return componenteBarco
        
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}

export async function updateComponenteBarco_(componenteBarco){
    const { id, name, description, image } = componenteBarco
    try {
        const componenteBarco_update = await ComponenteBarco.findByPk(id);
        console.log(componenteBarco_update)
        componenteBarco_update.name = name;
        componenteBarco_update.description = description;
        componenteBarco_update.image = image;
        await componenteBarco_update.save();
        return "se modifico correctamente" 
    } catch (error) {
        console.log(error)
        throw new Error("Sucedio un error......")
    }  

}

export async function deleteComponenteBarco_(id){
    try {
        await ComponenteBarco.destroy({
            where: { id },
        }); 
        return "se elimino correctamente"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }

}