import { Seccion } from "../persintence/models/Seccion.js";
import { Barco } from "../persintence/models/Barco.js";

import { createPunto_, getPunto_, updatePunto_, deletePunto_ } from "../persintence/repository/punto.repository.js";

export async function createPunto(req, res) {
    const { xCoord, yCoord, barcoId, seccionId } = req.body;
    const punto = {
        xCoord,
        yCoord,
        barcoId,
        seccionId,
    };

    try {
        const newPunto = await createPunto_(punto);
        res.status(200).json({ status: true, data: newPunto });
    } catch (error) {
        res.status(400).json({ status: false, error: error.message });
    }
}

export async function getPunto(req, res) {
    const { id } = req.params;
    try {
        const punto = await getPunto_(id);
        res.status(200).json({ status: true, data: punto });
    } catch (error) {
        res.status(400).json({ status: false, error: error.message });
    }
}

export async function updatePunto(req, res) {
    const { id } = req.params;
    const { xCoord, yCoord, barcoId, seccionId } = req.body;
    const punto = {
        id,
        xCoord,
        yCoord,
        barcoId,
        seccionId,
    };

    try {
        const msg = await updatePunto_(punto);
        res.status(200).json({ status: true, msg: msg });
    } catch (error) {
        res.status(400).json({ status: false, error: error.message });
    }
}

export async function deletePunto(req, res) {
    const { id } = req.params;
    try {
        const msg = await deletePunto_(id);
        res.status(200).json({ status: true, msg: msg });
    } catch (error) {
        res.status(400).json({ status: false, error: error.message });
    }
}