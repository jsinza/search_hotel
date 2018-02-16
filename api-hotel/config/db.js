const mongoose = require('mongoose');
const config = require('./config');
const dbSeeder = require('./dbSeeder');

mongoose.connect(config.mongodb.uri);

mongoose.connection.on('error', (err) => {
    console.log("Error: ", err);
});

mongoose.connection.on('connected', () => {
    console.log("Conectando a MongoDB");
    dbSeeder.init();
});

mongoose.connection.on('disconnected', () => {
    console.log("Desconectado a MongoDB");
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Conexion cerrada');
        process.exit(0);
    });
});

module.exports = mongoose;
