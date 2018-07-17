var app = angular.module('myapp');

app.controller('servicioCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, alertas, $timeout, $mdSidenav, $state, $stateParams, Servicio, Subservicio) {
	
	var self = this;
	var id = $stateParams.id;
	self.control = 0;
	self.infomuestra = false;

	class Servicio_{

		constructor(){
			this.item = {},
			this.obtener()
		}

		obtener(){
			Servicio.one(id)
			.then(res => self.servicio.item = res.data)
			.then(() => $scope.$digest())
		}

		habilitarEdicion(){
			if(self.control === 0){
				self.control = 1;
				self.infomuestra = true
			}
			else{
				self.control = 0;
				self.infomuestra = false
			}

		}

		editarServicio(servicio){

			Servicio.editar(servicio)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}
	}

	self.servicio = new Servicio_()


	class Subservicios_{

		constructor(){}

		obtener(){
			Subservicio.obtener()
			.then(res => {self.subservicios.items = res.data; console.log(self.subservicios.items)})
			.then(() => $scope.$digest())
		}

		agregarSubservicio(subservicio){
			subservicio.idServicio = id;

			Servicio.agregarSub(subservicio)
			.then(res => self.subservicios.agregados.push(subservicio))
			.then(() => $scope.$digest())

			alertas.mostrarToastEstandar("Subservicio agregado exitosamente!!!")
			$scope.subservicio = {value:-1, label:"Selecciona un subservicio"}
		}

		obtenerSubservicios(){
			Servicio.obtenerSub(id)
			.then(res => {self.subservicios.agregados = res.data; console.log(self.subservicios.agregados)})
			.then(() => $scope.$digest())
		}

		mandarAsubservicio(subservicio){

			$state.go('subservicio', {id : subservicio.id});

		}

		eliminarSubservicio(idx, subservicio){

			$mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Subservicio?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {
				subservicio.idServicio = null;
				Servicio.agregarSub(subservicio)
				.then(function(res) {
                    self.subservicios.agregados.splice(idx, 1)
                    alertas.mostrarToastEstandar("Subservicio eliminado exitosamente");
                })

            })


		}

	}

	self.subservicios = new Subservicios_()
	self.subservicios.obtener()
	self.subservicios.obtenerSubservicios()
});
