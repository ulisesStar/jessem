var app = angular.module('myapp');

app.controller('serviciosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Servicio, Imagen, Item) {

	var self = this;
	var bandera = 0;
	self.muestra = false;

	class Servicios_{
		constructor(){
			this.item = {},
			this.subservicio = {},
			this.items = [],
			this.obtener()
		}

		obtener(){
			Servicio.obtener()
			.then(res => res.data.map(n =>  new Servicio_(n)))
			.then(res => this.agregarServicio(res))
		}

		agregarServicio(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()
			this.mandarInfo(0);
			$('.slider').slick({
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true,
				arrows: true,
				prevArrow: $('.prev'),
				nextArrow: $('.next'),
			})
			$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
				let elSlide = $(slick.$slides[currentSlide]);
				let dataIndex = elSlide[0].dataset.slickIndex;
				self.servicios.item = {}
				self.servicios.mandarInfo(dataIndex);
			});
			console.log(self.servicios.items)
		}

		mandarInfo(idx){
			
			self.servicios.subservicio = self.servicios.items[idx];
			$scope.$digest()
			console.log(self.servicios.subservicio)
		}

		infoSlider(servicio){
			self.muestra = true;

			self.servicios.item = servicio;
			$scope.$digest()
		}

		verInfoSubservicio(subservicio){
			self.servicios.detalles = subservicio;
			console.log(self.servicios.detalles)
			$scope.$digest()
			self.servicios.agregarSlider();

		}
		agregarSlider(){

			$('.Ssubservicios').slick({
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 2
			});

		}
	}

	self.servicios = new Servicios_();

	class Servicio_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.descripcion = arg.descripcion,
			this.subservicios = [],
			this.imagenes(),
			this.obtenerSubservicios()
		}

		async obtenerSubservicios(){

			await Servicio.obtenerSub(this.id)
			.then(res => res.data.map(n =>   new Subservicios_(n)))
			.then(res => this.agregarSubservicio(res))
		}

		async imagenes(){
			await Imagen.obtenerDeservicios(this.id)
			.then(res => this.imagenes = res.data)
			.then(() => $scope.$digest())
		}

		agregarSubservicio(array){
			array.forEach(n => this.subservicios.push(n))
			$scope.$digest()
		}
	}

	class Subservicios_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.descripcion = arg.descripcion
			this.imagenesSub(),
			this.elementos()
		}

		 async imagenesSub(){

			 await Imagen.obtenerDesubservicios(this.id)
			.then(res => this.imagenes = res.data)
			.then(() => $scope.$digest())
		}

		 async elementos(){
		 	
			 await Item.obtenerDeSubservicios(this.id)
			.then(res => this.elementos = res.data)
			.then(() => $scope.$digest())
		}
	}
});
