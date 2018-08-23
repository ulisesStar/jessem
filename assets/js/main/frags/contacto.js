var app = angular.module('myapp');

app.controller('contactoCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

	console.log()



	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 19.13 , lng:  -96.1307968},
		zoom: 11
	});

	var marker = new google.maps.Marker({
	   position: {lat:  19.1343735, lng: -96.1307968},
	   map: map,
	   title: 'Hello World!'
	});

	var marcadores = [
		{
			latitude: 19.1343735,
			longitude: -96.1307968
		},
		{
			latitude: 19.069905,
			longitude: -96.076478
		}
	].map(n => new google.maps.Marker({
	   position: { lat: n.latitude, lng: n.longitude },
	   map: map
	}))


	self = this;

	self.contactos = [

		{
			nombre:"Oficinas Boca del Rio",
			arquitecto1: "Arq. Jocelyn J. Chávez Hernández.",
			arquitecto2: "Arq. Héctor Escobar Romero.",
			domicilio: "Calle Rio Jamapa No.1036 B Col: Las vegas II, C.P. 94297,Boca del Rio, Veracruz",
			tel1: "Tel:(229)286 20 03",
			tel2: "Cel1: 229 392 38 22",
			tel3: "Cel2: 229 950 04 05",
			email1: "jocelyn.chavez@jessem.com.mx",
			email2: "hector.romero@jessem.com.mx"

		},
		{
			nombre:"Oficinas Alvarado",
			arquitecto1: "Ing. Miguel Ángel Chavez Hernández",
			arquitecto2: "Ing. Wendy Carrillo Olmos",
			domicilio: "Calle Dalia #362 Fracc: El sendero, CP.95264, Alvarado,Veracruz",
			tel1: "Tel:(297)690 15 42",
			tel2: "Cel1: 229 422 50 99",
			tel3: "Cel2: 899 122 70 50",
			email1: "miguel.chavez@jessem.com.mx",
			email2: "wendy.carrillo@jessem.com.mx"

		},
		{
			nombre:"Oficinas Villarhermosa",
			arquitecto1: "Ing. Marco Chávez Hernández",
			arquitecto2: "",
			domicilio: "",
			tel1: "",
			tel2: "Cel1: 993 111 87 34",
			tel3: "",
			email1: "marco.chavez@jessem.com.mx"

		}

	]

	console.log(self.contactos)

		function Prueba(){

			$(".slider").slick({
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true,
				arrows: true,
				prevArrow: $('.prev'),
				nextArrow: $('.next')
			})

		}

		setTimeout(Prueba, 50)

});
