var app = angular.module('myapp');

app.controller('serviciosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Servicio, Imagen, Item) {

	var self = this;
	self.muestra = false;
	self.muestra2 = true;

	class Servicios_{
		constructor(){
			this.items = [],
			this.item = {},
			this.obtener()
		}

		obtener(){
			Servicio.obtener()
			.then(res => res.data.map(n => new Servicio_(n)))
			.then(res => this.agregarServicio(res))
		}

		agregarServicio(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()
			console.log(self.servicios.items)
			this.obtenerMasInfo(0);

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
				var detalles = ($('.detalles-servicios'))
				TweenLite.to(detalles, .2, {width:'0%', height:'100%'})
				this.item = {};
				$scope.$digest()
				self.servicios.obtenerMasInfo(dataIndex);
			});

		}

		obtenerMasInfo(idx){
			this.item = self.servicios.items[idx]
			$scope.$digest()
			console.log(self.servicios.item)
			
		}

		async abrirDetalles(subservicio){
			self.subservicio = subservicio;
			self.subservicio.elementos = []
			self.subservicio.imagenes = []
			self.muestra2 = false;
			var detalles = ($('.detalles-servicios'))
			TweenLite.to(detalles, .3, {width:'50%', height:'100%'})
			await Item.obtenerDeSubservicios(subservicio.id)
			.then(res => self.subservicio.elementos = res.data)
			.then(() => $scope.$digest())

			await Imagen.obtenerDesubservicios(subservicio.id)
			.then(res =>{ self.subservicio.imagenes = res.data; console.log(self.subservicio)})
			.then(() => $scope.$digest())

			if(self.servicios.imagenes != [])
				$('.algo').slick({
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					adaptiveHeight: true,
					arrows: true
				})
			

		}

		cerrar(){
			this.subservicios = {};
			var detalles = ($('.detalles-servicios'))
			TweenLite.to(detalles, .3, {width:'0%', height:'100%'})
		}

	}

	self.servicios = new Servicios_();

	class Servicio_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.descripcion = arg.descripcion,
			this.imagenes(),
			this.obtenerSubservicios()
		}

		async obtenerSubservicios(){

			await Servicio.obtenerSub(this.id)
			.then(res => this.subservicios = res.data)
			.then(() => $scope.$digest())
		}

		async imagenes(){
			await Imagen.obtenerDeservicios(this.id)
			.then(res => this.imagenes = res.data)
			.then(() => $scope.$digest())
		}
	}
});
