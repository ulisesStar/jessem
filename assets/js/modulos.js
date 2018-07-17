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
