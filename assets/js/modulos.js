app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {

	function template(seccion, vista) {
	    let obj = {
	        name: seccion + vista,
	        files: [ 'js/' + seccion + '/frags/' + vista + '.js' ]
	    }
	    return obj
	}

    $ocLazyLoadProvider.config({
        debug: true,
        modules: [

			template('main', 'home'),
			template('main', 'servicio'),
			template('main', 'servicios'),
			template('main', 'subservicios'),
			template('main', 'subservicio'),
			template('main', 'proyectos'),
			template('main', 'proyecto'),
			template('main', 'trabajadores'),
			template('main', 'trabajador'),
			template('main', 'nosotros'),
			template('main', 'contacto'),
			template('main', 'clientes'),
			template('admin', 'home'),
			template('admin', 'servicios'),
			template('admin', 'subservicios'),
			template('admin', 'proyectos'),
			template('admin', 'trabajadores'),
			template('admin', 'servicio'),
			template('admin', 'subservicio'),
			template('admin', 'proyecto'),
			template('admin', 'trabajador'),
        ]

    });
}]);
