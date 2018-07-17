var app = angular.module('myapp');

app.controller('proyectosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, alertas, $timeout, $mdSidenav, $state, $stateParams, Proyecto) {
	
	var self = this

	class Contenedor {
		constructor(){
			this.paginas = null,
			this.pagina = 1,
			this.item = 5,
			this.items = [],
			this.obtener()
	}

		obtener(){
			Proyecto.paginacion(this.item, this.pagina)
			.then(res => self.proyectos.items = res.data.items.map(n => new OneProyecto_(n)))
			.then(() => $scope.$digest())
		}

		nuevo(){
			$mdDialog.show({
				templateUrl: '/dialogs/nuevoProyecto',
				parent: angular.element(document.body),
				bindToController: true,
				preserveScope: true,
				clickOutsideToClose: true,
				fullscreen: $scope.customFullscreen,
				controller: function($scope, $mdDialog, alertas, $state, Proyecto) {
					$scope.submit = function(proyecto) {
						Proyecto.crear(proyecto).then(res =>{
							$mdDialog.hide();
							$state.go('proyecto', {id : res.data.id});
						})
						alertas.mostrarToastEstandar("Proyecto agregado exitosamente");
					}
					$scope.close = function() {
						$mdDialog.hide(false);
					}
				}
			})

		}

		anterior(){ 
			this.pagina = this.pagina - 1;
			this.obtener();
		}
		siguiente(){ 
			this.pagina = this.pagina + 1;
			this.obtener();
		}
	}

	class OneProyecto_ {
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre    
	}

		eliminar(idx){

			$mdDialog.show(
				$mdDialog.confirm().title('¿Seguro que quieres eliminar este Proyecto?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true))
			.then(() => {
				Proyecto.eliminar(this.id).then(function(res) {
					self.proyectos.items.splice(idx, 1)
					alertas.mostrarToastEstandar("Proyecto eliminado exitosamente");
				})

			})
		}
	}

	self.proyectos = new Contenedor()

});
