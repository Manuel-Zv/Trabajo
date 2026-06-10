import express from 'express'; 

const main= async () =>{
try {
await sequelize.authenticate();
console.log('Connection has been established successfully.');
app.listen(port, () => {
console.log(`Servidor corriendo en el puerto ${port}`)
})
} catch (error) {
console.error(`Error ${error}`);
}
}
main();