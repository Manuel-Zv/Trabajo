import {Router} from 'express';
import { GetallEquipos, GetEquipoById, PostEquipo } from '../controller/EquiposController.js';

const EquiposRouter = Router();

EquiposRouter.get('/', GetallEquipos);
EquiposRouter.get('/:id', GetEquipoById);
EquiposRouter.post('/', PostEquipo);

export default EquiposRouter;