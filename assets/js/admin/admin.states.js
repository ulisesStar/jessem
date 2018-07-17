app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {


	function template(url, template, controller, oz, params) {
		let obj = {
			url: url,
			params: params,
			views: {
				'main': {
					templateUrl: template,
					controller: controller + ' as ctrl'
				}
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([oz]);
					}
				]
			}
		}
		return obj
	}

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', template('/', '/admin/home', 'homeCtrl', 'adminhome'))
	.state('servicios', template('/servicios', '/admin/servicios', 'serviciosCtrl', 'adminservicios'))
	.state('servicio', template('/servicio/:id', '/admin/servicio', 'servicioCtrl', 'adminservicio', { 'id' : null}))
	.state('subservicios', template('/subservicios', '/admin/subservicios', 'subserviciosCtrl', 'adminsubservicios'))
	.state('subservicio', template('/subservicio/:id', '/admin/subservicio', 'subservicioCtrl', 'adminsubservicio', { 'id' : null}))
	.state('proyectos', template('/proyectos', '/admin/proyectos', 'proyectosCtrl', 'adminproyectos'))
	.state('proyecto', template('/proyecto/:id', '/admin/proyecto', 'proyectoCtrl', 'adminproyecto', { 'id' : null}))
	.state('trabajadores', template('/trabajadores', '/admin/trabajadores', 'trabajadoresCtrl', 'admintrabajadores'))
	.state('trabajador', template('/trabajador/:id', '/admin/trabajador', 'trabajadorCtrl', 'admintrabajador', { 'id' : null}))
	
}]);
