var app = angular.module('myapp');

app.controller('contactoCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

	self = this;

		$scope.map = {
			center: {
				latitude: 19.1343735,
				longitude: -96.1307968
			},
			zoom: 11
		};

		$scope.markers = [
			{
				coordenadas: {
					latitude: 19.1343735,
					longitude: -96.1307968,
				}
			},
			{
				coordenadas: {
					latitude: 19.069905,
					longitude: -96.076478,
				}
			}
		];

	self.contactos = [

		{
			nombre:"Oficinas Boca del Rio",
			arquitecto1: "Arq. Jocelyn J. Chávez Hernández.",
			arquitecto2: "Arq. Héctor Escobar Romero.",
			domicilio: "Calle Rio Jamapa No.1036 B Col: Las vegas II, C.P. 94297,Boca del Rio, Veracruz",
			tel1: "Tel:(229)286 20 03",
			tel2: "Cel1: 229 392 38 22",
			tel3: "Cel2: 229 950 04 05",
			email1: "",
			email2: ""

		},
		{
			nombre:"Oficinas Alvarado",
			arquitecto1: "Ing. Miguel Ángel Chavez Hernández",
			arquitecto2: "",
			domicilio: "Calle Dalia #362 Fracc: El sendero, CP.95264, Alvarado,Veracruz",
			tel1: "Tel:(297)690 15 42",
			tel2: "Cel1: 229 422 50 99",
			tel3: "Cel2: 899 122 70 50",
			email1: "",
			email2: ""

		},
		{
			nombre:"Oficinas Villarhermosa",
			arquitecto1: "Ing. Marco Chávez Hernández",
			arquitecto2: "",
			domicilio: "",
			tel1: "",
			tel2: "Cel1: 993 111 87 34",
			tel3: "",
			email1: "",
			email2: ""

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
