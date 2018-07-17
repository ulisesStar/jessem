var app = angular.module('myapp');

app.controller('trabajadoresCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, alertas, $mdSidenav, $state, $stateParams, Trabajador) {
	

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
			Trabajador.paginacion(this.item, this.pagina)
			.then(res => self.trabajadores.items = res.data.items.map(n => new OneTrabajador_(n)))
			.then(() => $scope.$digest())
		}

		nuevo(){
			$mdDialog.show({
				templateUrl: '/dialogs/nuevoTrabajador',
				parent: angular.element(document.body),
				bindToController: true,
				preserveScope: true,
				clickOutsideToClose: true,
				fullscreen: $scope.customFullscreen,
				controller: function($scope, $mdDialog, alertas, $state, Trabajador) {
					$scope.submit = function(trabajador) {
						Trabajador.crear(trabajador).then(res =>{
							$mdDialog.hide();
							$state.go('trabajador', {id : res.data.id});
						})
						alertas.mostrarToastEstandar("Trabajador agregado exitosamente");
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

	class OneTrabajador_ {
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre    
	}

		eliminar(idx){

			$mdDialog.show(
				$mdDialog.confirm().title('¿Seguro que quieres eliminar este Trabajador?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true))
			.then(() => {
				Trabajador.eliminar(this.id).then(function(res) {
					self.trabajadores.items.splice(idx, 1)
					alertas.mostrarToastEstandar("Trabajador eliminado exitosamente");
				})

			})
		}
	}

	self.trabajadores = new Contenedor()


});
