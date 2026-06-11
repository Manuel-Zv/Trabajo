import express from 'express';
import { sequelize } from './db/conexion.js';
import EquiposRouter from './router/EquiposRouter.js';

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/equipos', EquiposRouter);

const main= async () =>{
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false});
        console.log('Connection has been established successfully.');

        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`);
        });
        
    } catch (error) {
        console.error(`Error ${error}`);
    }
};
main();