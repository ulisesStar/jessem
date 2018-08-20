var app = angular.module('myapp');

app.controller('serviciosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Servicio, Imagen, Item) {

	var self = this;
	self.muestra = false;
	self.muestra2 = true;


	class objetivo_ {
		constructor(arg) {
			Object.entries(arg).forEach(n => this[n[0]] = n[1])
			this.obtener()
			console.log(this)
		}
		async obtener(){
			await Item.obtenerDeSubservicios(this.id)
			.then(res => this.elementos = res.data)


			await Imagen.obtenerDesubservicios(this.id)
			.then(res => this.imagenes = res.data)

			await $scope.$digest()
		}

	}

	class Servicios_{
		constructor(){
			this.items = [],
			this.item = {},
			this.idx = 0,
			this.obtener()
		}
		mostrar(){
			self.muestra = !self.muestra
			self.muestra === true ? this.abrirDetalles(this.item.subservicios[0]) : this.cerrar()
		}
		obtener(){
			Servicio.obtener()
			.then(res => res.data.map(n => new Servicio_(n)))
			.then(res => this.agregarServicio(res))
		}

		obtenerMasInfo(){
			this.item = self.servicios.items[this.idx]
			$scope.$digest()

		}

		agregarServicio(array){
			array.forEach(n => this.items.push(n))
			$scope.$digest()
			this.obtenerMasInfo();

			$('.slider-content').slick({
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true,
				arrows: true,
				prevArrow: $('.prev'),
				nextArrow: $('.next'),
			})
			$('.slider-content').on('afterChange', function(event, slick, currentSlide, nextSlide){
				let elSlide = $(slick.$slides[currentSlide]);
				self.servicios.idx = Number(elSlide[0].dataset.slickIndex);
				var detalles = ($('.detalles-servicios'))
				TweenLite.to(detalles, .2, {width:'0%', height:'100%'})
				this.item = {};
				$scope.$digest()
				self.servicios.obtenerMasInfo()

			});

		}



		async abrirDetalles(subservicio){


			console.log((!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  50 :  100)

			self.subservicio = new objetivo_(subservicio);
			self.muestra = true
			TweenLite.to($('.detalles-servicios'), .3, {width:  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  '50%' :  '100%', height:'100%'})
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
			self.muestra2 = true
			self.muestra = false
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
