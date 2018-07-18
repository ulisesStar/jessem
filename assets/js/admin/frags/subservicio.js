var app = angular.module('myapp');

app.controller('subservicioCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, alertas, $timeout, $mdSidenav, $state, $stateParams, Subservicio, Item, Imagen) {
	
	var self = this;
	var id = $stateParams.id;
	self.control = 0;
	self.infomuestra = false;
	self.controlItems = 0;
	self.infomuestraItems = false;

	class Subservicio_{
		constructor(){
			this.item = {},
			this.obtener()
		}

		obtener(){
			Subservicio.one(id)
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

		editarSubservicio(subservicio){

			Subservicio.editar(subservicio)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}
	}

	self.subservicio = new Subservicio_();

	class Elementos_{
		constructor(){
			this.items = [],
			this.obtener()
		}

		crear(elemento){
			elemento.idSubservicio = id;
			Item.crear(elemento)
			.then(res => this.items.push(res.data))
			.then(() => $scope.$digest())
			self.infomuestraItems = false

		}

		obtener(){

			Item.obtenerDeSubservicios(id)
			.then(res => this.items = res.data)
			.then(() => $scope.$digest()) 

		}

		habilitarEdicion(){
			if(self.controlItems === 0){
				self.controlItems = 1;
				self.infomuestraItems = true
				delete $scope.elemento.nombre 
			}
			else{
				self.controlItems = 0;
				self.infomuestraItems = false
			}

		}

		eliminarElemento(idx, elemento){
			$mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Elemento?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {
				elemento.idSubservicio = null;
				Item.eliminar(elemento.id)
				.then(function(res) {
                    self.elementos.items.splice(idx, 1)
                    alertas.mostrarToastEstandar("Elemento eliminado exitosamente");
                })

            })

		}
	}

	self.elementos = new Elementos_();

	class Imagenes_{
		constructor(){
			this.items = [],
			this.obtener()
		}

		obtener(){

			Imagen.obtenerDesubservicios(id)
			.then(res => this.items = res.data)
			.then(() => $scope.$digest())

		}

		guardarImagen(foto){

			let imagen = {
				imagen: 'data:image/png;base64,' + foto.base64,
				idSubservicio: id
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
