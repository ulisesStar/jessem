var app = angular.module('myapp');

app.controller('proyectoCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, alertas, $timeout, $mdSidenav, $state, $stateParams, Proyecto, Servicio, Imagen) {
	
	var self = this
	var id = $stateParams.id;
	self.control = 0;
	self.infomuestra = false;

	class Proyecto_{
		constructor(){
			this.item = {},
			this.obtener()
		}
		obtener(){

			Proyecto.one(id)
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

		editarProyecto(proyecto){

			Proyecto.editar(proyecto)
			.then(res => alertas.mostrarToastEstandar("Guardado exitosamente!!!"))
			.then(() => $scope.$digest())

			self.infomuestra = false

		}
	}
	self.proyecto = new Proyecto_();

	class Servicios_{

		constructor(){
			this.obtener(),
			this.obtenerServicios()
		}

		obtener(){
			Servicio.obtener()
			.then(res => {self.servicios.items = res.data; console.log(self.servicios.items)})
			.then(() => $scope.$digest())
		}

		agregarServicio(servicio){
			let obj ={
				idServicio: servicio.id,
				idProyecto: id
			}
			
			Servicio.agregarAproyectos(obj)
			.then(res => self.servicios.agregados.push(servicio))
			.then(() => $scope.$digest())

			alertas.mostrarToastEstandar("Servicio agregado exitosamente!!!")
			$scope.servicio = {value:-1, label:"Selecciona un servicio"}
		}

		obtenerServicios(){
			Proyecto.obtenerServicios(id)
			.then(res => {self.servicios.agregados = res.data; console.log(self.servicios.agregados)})
			.then(() => $scope.$digest())
		}

		mandarAservicio(servicio){

			$state.go('servicio', {id : servicio.id});

		}

		eliminarServicio(idx, servicio){

			$mdDialog.show(
                $mdDialog.confirm().title('¿Seguro que quieres eliminar este Servicio?').textContent('Para eliminar de forma permanente selecciona aceptar').ok('Aceptar').cancel('Cerrar').clickOutsideToClose(true)
            )
            .then(() => {
				let obj ={
					idServicio: servicio,
					idProyecto: id
				} 
				Servicio.eliminarDeproyectos(obj)
				.then(res => self.servicios.agregados.splice(idx, 1))
                .then(res => alertas.mostrarToastEstandar("Servicio eliminado exitosamente"))
                .then(() => $scope.$digest())

            })


		}

	}

	self.servicios = new Servicios_()

	class Imagenes_{
		constructor(){
			this.items = [],
			this.obtener()
		}

		obtener(){

			Imagen.obtenerDeproyectos(id)
			.then(res => this.items = res.data)
			.then(() => $scope.$digest())

		}

		guardarImagen(foto){

			let imagen = {
				imagen: 'data:image/png;base64,' + foto.base64,
				idProyecto: id
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
