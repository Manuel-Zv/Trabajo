import { Equipos} from '../model/Equipos.js';

export const GetallEquipos = async (req, res) => {
    try {
        const equipos = await Equipos.findAll();
        res.json(equipos);
    }
    catch (error) {
        console.error(`Error ${error}`);
        res.status(500).json({ error: 'Error al obtener los equipos' });
    }
};