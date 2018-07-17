module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('imagenes', {
        imagen: {
            type: Sequelize.BLOB('medium'),
            get() {
                var imagenBin = this.getDataValue('imagen');
                var Imagenes = new Buffer(imagenBin).toString('ascii');
                return Imagenes
            },
        },
    },{
    	name : {
    		singular: 'imagen',
    		plural: 'imagenes'
        }
	})

