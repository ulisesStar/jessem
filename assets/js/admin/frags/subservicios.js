var app = angular.module('myapp');

app.controller('subserviciosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, alertas, $mdSidenav, $state, $stateParams, Subservicio) {
	
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
			Subservicio.paginacion(this.item, this.pagina)
			.then(res => self.subservicios.items = res.data.items.map(n => new OneSubservicio_(n)))
			.then(() => $scope.$digest())
		}

		nuevo(){
			$mdDialog.show({
				templateUrl: '/dialogs/nuevoSubservicio',
				parent: angular.element(document.body),
				bindToController: true,
				preserveScope: true,
				clickOutsideToClose: true,
				fullscreen: $scope.customFullscreen,
				controller: function($scope, $mdDialog, alertas, $state, Subservicio) {
					$scope.submit = function(subservicio) {
						Subservicio.crear(subservicio).then(res =>{
							$mdDialog.hide();
							$state.go('subservicio', {id : res.data.id});
						})
						alertas.mostrarToastEstandar("Subservicio agregado exitosamente");
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

	class OneSubservicio_ {
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre    
	}

		eliminar(idx){

			$mdDialog.show(
				$mdDialog.confirm().title('¿Seguro que quieres eliminar este Subservicio?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true))
			.then(() => {
				Subservicio.eliminar(this.id).then(function(res) {
					self.subservicios.items.splice(idx, 1)
					alertas.mostrarToastEstandar("Subservicio eliminado exitosamente");
				})

			})
		}
	}

	self.subservicios = new Contenedor()

});
