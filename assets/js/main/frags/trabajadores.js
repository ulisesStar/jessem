var app = angular.module('myapp');

app.controller('trabajadoresCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Imagen, Trabajador) {

	var self = this;

	class Trabajadores_{
		constructor(){
			this.items = [],
			this.obtener()
		}

		obtener(){
			Trabajador.obtener()
			.then(res => res.data.map(n => new Trabajador_(n)))
			.then(res => this.agregarTrabajador(res))
		}

		agregarTrabajador(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()
			console.log(self.trabajadores.items)

			$('.slider').slick({
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true
			})
		}
	}

	self.trabajadores = new Trabajadores_();

	class Trabajador_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.descripcion = arg.descripcion,
			this.puesto = arg.puesto,
			this.imagenes()
		}

		imagenes(){
			Imagen.obtenerDetrabajadores(this.id)
			.then(res => this.imagen = res.data)
			.then(() => $scope.$digest())
		}
	}

});
