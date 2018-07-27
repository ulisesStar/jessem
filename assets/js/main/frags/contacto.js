var app = angular.module('myapp');

app.controller('contactoCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

	self = this;

		$scope.map = {
			center: {
				latitude: 19.1343735,
				longitude: -96.1307968
			},
			zoom: 17
		};

		$scope.markers = [
			{
				coordenadas: {
					latitude: 19.1343735,
					longitude: -96.1307968,
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
			email1: "email: arq.jocelynjchn@outlook.com",
			email2: "email: arq.hectorescrome@gmail.com"

		},
		{
			nombre:"Oficinas Veracruz",
			arquitecto1: "Arq. Jocelyn J. Chávez Hernández.",
			arquitecto2: "Arq. Héctor Escobar Romero.",
			domicilio: "Calle Rio Jamapa No.1036 B Col: Las vegas II, C.P. 94297,Boca del Rio, Veracruz",
			tel1: "Tel:(229)286 20 03",
			tel2: "Cel1: 229 392 38 22",
			tel3: "Cel2: 229 950 04 05",
			email1: "email: arq.jocelynjchn@outlook.com",
			email2: "email: arq.hectorescrome@gmail.com"

		},
		{
			nombre:"Oficinas CDMX",
			arquitecto1: "Arq. Jocelyn J. Chávez Hernández.",
			arquitecto2: "Arq. Héctor Escobar Romero.",
			domicilio: "Calle Rio Jamapa No.1036 B Col: Las vegas II, C.P. 94297,Boca del Rio, Veracruz",
			tel1: "Tel:(229)286 20 03",
			tel2: "Cel1: 229 392 38 22",
			tel3: "Cel2: 229 950 04 05",
			email1: "email: arq.jocelynjchn@outlook.com",
			email2: "email: arq.hectorescrome@gmail.com"

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
