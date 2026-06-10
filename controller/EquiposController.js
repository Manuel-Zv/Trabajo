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
export const GetEquipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const equipo = await Equipos.findByPk(id);
        if (equipo) {
            res.json(equipo);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    }
    catch (error) {
        console.error(`Error ${error}`);
        res.status(500).json({ error: 'Error al obtener el equipo' });
    }
};