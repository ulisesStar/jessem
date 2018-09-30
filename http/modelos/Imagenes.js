module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('imagenes', {
        imagen: {
            type: Sequelize.BLOB('medium'),
            get() {
                var imagenBin = this.getDataValue('imagen');
				if(imagenBin)
	                var Imagenes = new Buffer(imagenBin).toString('ascii');
	                return Imagenes
            },
            // set(imagen) {
            //
            //     return imagen
            //
            // }
        },
    },{
    	name : {
    		singular: 'imagen',
    		plural: 'imagenes'
        }
	})
