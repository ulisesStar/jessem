app.controller('mainCtrl', function ($scope, $location, anchorSmoothScroll, $state, mdDialog, $timeout, $mdSidenav) {



	$scope.secciones = [
        {
            nombre: 'home',
            state: 'home'
        },{
            
            nombre: 'Nosotros',
            state: 'nosotros'
        },{
            
            nombre: 'Servicios',
            state: 'servicios'
        },{
            
            nombre: 'Proyectos',
            state: 'proyectos'
        },{
            
            nombre: 'Equipo',
            state: 'trabajadores'
        },{
            
            nombre: 'Contacto',
            state: 'contacto'
        }

    ];

    $scope.toggleLeft = buildToggler('right');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

});
