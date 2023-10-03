import { Multimedia } from "../models/Multimedia.js"

export async function createMultimedia_(multimedia){
    const { id, url } = multimedia;
    try{ 
        let newMultimedia = await Multimedia.create(
            {
            url,
            },
            {
            fields: ["url"],
            }
        );
      return newMultimedia
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}
export async function getMultimedia_(id){
    try {
        const multimedia = await Multimedia.findOne({
          where: {
            id,
          },
        });
        return multimedia
      } catch (error) {
        throw new Error("Sucedio un error......")
      }
}

{/* Cambiar la información de un barco */}
export async function updateMultimedia_(barco){
    const {name, model, image, personalizado } = barco 
    try {
        const multimedia = await Multimedia.findByPk(id);
        multimedia.url = url;
        await multimedia.save();
        return "Multimedia Modificada"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function deleteMultimedia_(id){
    try {
        await Multimedia.destroy({
            where: {
            id,
        },
        });
        return "Se elimino correctamente.. "
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}