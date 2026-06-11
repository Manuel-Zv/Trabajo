import { Equipos } from '../model/Equipos.js';

export const GetallEquipos = async (req, res) => {
    try {
        const equipos = await Equipos.findAll();
        res.json(equipos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los equipos' });
    }
};

export const GetEquipoById = async (req, res) => {
    const { id } = req.params;
    try {
        const equipo = await Equipos.findByPk(id);
        if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });
        res.json(equipo);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el equipo' });
    }
};

export const PostEquipo = async (req, res) => {
    const { nombre, ciudad, pais, estadio, anio_fundacion } = req.body;
    try {
        const nuevoEquipo = await Equipos.create({ nombre, ciudad, pais, estadio, anio_fundacion });
        res.status(201).json(nuevoEquipo);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Error al crear el equipo' });
    }
};