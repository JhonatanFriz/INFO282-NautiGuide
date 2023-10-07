import { Punto } from "../models/Punto.js";

export async function createPunto_(punto) {
    const { xCoord, yCoord, barcoId, seccionId } = punto;
    try {
        const newPunto = await Punto.create({
            xCoord,
            yCoord,
            barcoId,
            seccionId,
        });
        return newPunto;
    } catch (error) {
        throw new Error("Ocurrió un error al crear el punto.");
    }
}

export async function getPunto_(id) {
    try {
        const punto = await Punto.findOne({
            where: { id },
            attributes: ["id", "xCoord", "yCoord", "barcoId", "seccionId"],
        });
        return punto;
    } catch (error) {
        throw new Error("Ocurrió un error al obtener el punto.");
    }
}

export async function updatePunto_(punto) {
    const { id, xCoord, yCoord, barcoId, seccionId } = punto;
    try {
        const puntoUpdate = await Punto.findByPk(id);
        puntoUpdate.xCoord = xCoord;
        puntoUpdate.yCoord = yCoord;
        puntoUpdate.barcoId = barcoId;
        puntoUpdate.seccionId = seccionId;
        await puntoUpdate.save();
        return "Punto modificado correctamente.";
    } catch (error) {
        throw new Error("Ocurrió un error al modificar el punto.");
    }
}

export async function deletePunto_(id) {
    try {
        await Punto.destroy({
            where: { id },
        });
        return "Punto eliminado correctamente.";
    } catch (error) {
        throw new Error("Ocurrió un error al eliminar el punto.");
    }
}