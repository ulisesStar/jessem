app.controller('adminCtrl', function($scope, $rootScope, $http, mdDialog, $timeout, $mdSidenav) {


    $scope.secciones = [
        {
            icon: 'home',
            nombre: 'home',
            state: 'home'
        },{
            icon: 'star',
            nombre: 'Servicios',
            state: 'servicios'
        },{
            icon: 'notes',
            nombre: 'Subservicios',
            state: 'subservicios'
        },{
            icon: 'work',
            nombre: 'Proyectos',
            state: 'proyectos'
        },{
            icon: 'group',
            nombre: 'Equipo',
            state: 'trabajadores'
        }

    ];

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.Dropify = function() {

        $('.dropify').dropify({
            messages: {
                default: 'Agregar',
                replace: 'Reemplazar',
                remove: 'Eliminar',
                error: 'Error'
             }
        });

        $('.dropify').on('change', function() {

            var input = this;
            if(input.files && input.files[0]){
                var reader = new FileReader();

                reader.onload = function(e) {
                    $scope.$apply(function(){
                        $scope.inputImage = e.target.result;
                    });
                }

                reader.readAsDataURL(input.files[0]);
            }
        });

    };
});
