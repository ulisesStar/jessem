var app = angular.module('myapp');

app.controller('homeCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams) {

	var self = this;

	var tl = new TimelineLite({onComplete:function() {
	    this.restart()}
	});

	var entrada =  {left:-200, opacity:0}
	var salida = {left:200, opacity:0}

	tl.from($('#1'), 0.5, entrada, "+=0.5");
	tl.to($('#1'), 0.5, salida, "+=2");
	tl.from($('#2'), 0.5, entrada);
	tl.to($('#2'), 0.5, salida, "+=2");
	tl.from($('#3'), 0.5, entrada);
	tl.to($('#3'), 0.5, salida, "+=2");
	tl.from($('#4'), 0.5, entrada);
	tl.to($('#4'), 0.5, salida, "+=2");

});
