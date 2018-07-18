var app = angular.module('myapp');

app.controller('trabajadorCtrl', function($scope, $rootScope, $http, $mdDialog, alertas, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Trabajador, Imagen) {
	
	var self = this
	var id = $stateParams.id;
	self.control = 0;
	self.infomuestra = false;

	class Trabajador_{
		constructor(){
			this.item = {},
			this.obtener()
		}
		obtener(){

			Trabajador.one(id)
			.then(res => this.item = res.data)
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

		editarTrabajador(trabajador){

			Trabajador.editar(trabajador)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}
	}
	self.trabajador = new Trabajador_();

	class Imagenes_{
		constructor(){
			this.items = [],
			this.obtener()
		}

		obtener(){

			Imagen.obtenerDetrabajadores(id)
			.then(res => this.items = res.data)
			.then(() => $scope.$digest())

		}

		guardarImagen(foto){

			let imagen = {
				imagen: 'data:image/png;base64,' + foto.base64,
				idTrabajador: id
			}

			Imagen.crear(imagen)
			.then(res => this.items.push(res.data))
			.then(() => $scope.$digest())
			resetDropify();

		}

		eliminarImagen(id, $index){
			let ventana = $mdDialog.confirm().title('¿Seguro que quieres eliminar esta Imagen?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true);
			$mdDialog.show(ventana).then(function() {

				Imagen.eliminar(id)
				.then(res => self.imagenes.items.splice($index, 1))
				.then(res => alertas.mostrarToastEstandar("Imagen eliminada exitosamente"))
				.then(() => $scope.$digest())

			}, function() {});

		}
	}

	self.imagenes = new Imagenes_();


	function resetDropify() {
		$scope.inputImage = null; 
		$(".dropify-clear").trigger("click");
	}
});
