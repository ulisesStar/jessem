var fs = require('fs');
var mysql = require('mysql');
var Sequelize = require('sequelize');



var sequelize = new Sequelize('jessem', 'root', '1234', {
    host: '108.59.84.10',
    dialect: 'mysql',
    define: {
       charset: 'utf8',
       collate: 'utf8_general_ci',
       timestamps: true
    },
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


//
// sequelize.authenticate().complete(function(err) {
//     if (err) {
//         console.log('Unable to connect to the database:', err);
//     } else {
//         console.log('Connection has been established successfully.');
//     }
// })

sequelize.sync()
.then(() =>  console.log('Connecion realizada'))
.catch(err =>  console.log('No se puede conectar a la bd:', err))


module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
