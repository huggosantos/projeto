var app = angular.module('myApp', ['ngRoute']).config(
    function($routeProvider) {
        /*ROTAS*/
        $routeProvider
            .when('/cad', {
                templateUrl: 'templates/cad.html',
                controller: 'cad'
            })
              .when('/sobre', {
                templateUrl: 'templates/sobre.html',
                controller: 'sobre'
            })
            .when('/RelaEuler', {
                templateUrl: 'templates/RelaEuler.html',
                controller: 'RelaEuler'
            })
            .when('/poliedrosPlatao', {
                templateUrl: 'templates/poliedrosDePlatao.html',
                controller: 'poliedrosPlatao'
            })
            .when('/poliedrosRegulares', {
                templateUrl: 'templates/poliedrosRegulares.html',
                controller: 'poliedrosRegulares'
            })
            .when('/prisma', {
                templateUrl: 'templates/prisma.html',
                controller: 'prisma'
            })
             .when('/Paralelepipedo', {
                templateUrl: 'templates/Paralelepipedo.html',
                controller: 'Paralelepipedo'
            })
             .when('/cubo', {
                templateUrl: 'templates/cubo.html',
                controller: 'cubo'
            })
             .when('/piramide', {
                templateUrl: 'templates/piramide.html',
                controller: 'piramide'
            })
             .when('/cilindro', {
                templateUrl: 'templates/cilindro.html',
                controller: 'cilindro'
            })
             .when('/cone', {
                templateUrl: 'templates/cone.html',
                controller: 'cone'
            })
              .when('/5ladosOuMais', {
                templateUrl: 'templates/Calc/5ladosOuMais.html',
                controller: '5ladosOuMais'
            })
               .when('/areaTotalPrisma', {
                templateUrl: 'templates/Calc/areaTotalPrisma.html',
                controller: 'areaTotalPrisma'
            })
              .when('/areaDaBase3lados', {
                templateUrl: 'templates/Calc/areaDaBase3lados.html',
                controller: 'areaDaBase3lados'
            })
             .when('/3ladosRegular', {
                templateUrl: 'templates/Calc/3ladosRegular.html',
                controller: '3ladosRegular'
            })
              .when('/3ladosIrregularComMedidaDos3lados', {
                templateUrl: 'templates/Calc/3ladosIrregularComMedidaDos3lados.html',
                controller: '3ladosIrregularComMedidaDos3lados'
            })
              .when('/PrismaInrregularComAnguloEntre', {
                templateUrl: 'templates/Calc/PrismaInrregularComAnguloEntre.html',
                controller: 'PrismaInrregularComAnguloEntre'
            })
              .when('/PrismaIrregularBaseEAltura', {
                templateUrl: 'templates/Calc/PrismaIrregularBaseEAltura.html',
                controller: 'PrismaIrregularBaseEAltura'
            })
              .when('/areaDaBase4lados', {
               templateUrl: 'templates/Calc/areaDaBase4lados.html',
               controller: 'areaDaBase4lados'
            })
              .when('/4ladosRegularPrisma', {
               templateUrl: 'templates/Calc/4ladosRegularPrisma.html',
               controller: '4ladosRegularPrisma'
            })
              .when('/Paralelogramo', {
               templateUrl: 'templates/Calc/Paralelogramo.html',
               controller: 'Paralelogramo'
            })
               .when('/trapezio', {
               templateUrl: 'templates/Calc/trapezio.html',
               controller: 'trapezio'
            })
               .when('/losango', {
               templateUrl: 'templates/Calc/losango.html',
               controller: 'losango'
            })
               .when('/faceLateralRetaPrisma', {
               templateUrl: 'templates/Calc/faceLateralRetaPrisma.html',
               controller: 'faceLateralRetaPrisma'
            })
                .when('/areaLateral', {
               templateUrl: 'templates/Calc/areaLateral.html',
               controller: 'areaLateral'
            })
               .when('/faceLateralObliquaComBaseEAlturaPrisma', {
               templateUrl: 'templates/Calc/faceLateralObliquaComBaseEAlturaPrisma.html',
               controller: 'faceLateralObliquaComBaseEAlturaPrisma'
            })
               .when('/faceLateralObliquaArestaBaseELateralEAnguloPrisma', {
               templateUrl: 'templates/Calc/faceLateralObliquaArestaBaseELateralEAnguloPrisma.html',
               controller: 'faceLateralObliquaArestaBaseELateralEAnguloPrisma'
            })
               .when('/volumePrismaRegular', {
               templateUrl: 'templates/Calc/volumePrismaRegular.html',
               controller: 'volumePrismaRegular'
            })
               .when('/volumePrismaIrregular', {
               templateUrl: 'templates/Calc/volumePrismaIrregular.html',
               controller: 'volumePrismaIrregular'
            })
               .when('/areaBaseCilindro', {
               templateUrl: 'templates/Calc/areaBaseCilindro.html',
               controller: 'areaBaseCilindro'
            })
               .when('/areaLateralCilindroReto', {
               templateUrl: 'templates/Calc/areaLateralCilindroReto.html',
               controller: 'areaLateralCilindroReto'
            })
               .when('/areaLateralCilindroObliquo', {
               templateUrl: 'templates/Calc/areaLateralCilindroObliquo.html',
               controller: 'areaLateralCilindroObliquo'
            })
               .when('/volumeCilindroReto', {
               templateUrl: 'templates/Calc/volumeCilindroReto.html',
               controller: 'volumeCilindroReto'
            })
               .when('/volumeCilindroObliquo', {
               templateUrl: 'templates/Calc/volumeCilindroObliquo.html',
               controller: 'volumeCilindroObliquo'
            }) 
               .when('/home', {
               templateUrl: 'templates/home.html',
               controller: 'home'
            })
               .when('/sobre', {
               templateUrl: 'templates/sobre.html',
               controller: 'sobre'
            })
               .otherwise('/home', {
               templateUrl: 'templates/home.html',
               controller: 'home'
            });
        }).run(function() {
    //remove 300ms delay touch
    FastClick.attach(document.body);
});

 



 app.controller('home', function($scope, $routeParams, cad) {
    $(document).ready(function(){
      $('.parallax').parallax();
    });

   $(document).ready(function(){
      $('.carousel').carousel();
    });
    
    });


 /*FACTORYS*/
app.factory('cad', function($http) {
    var agendaList;
    var obj = {};

    obj = {
        getAgenda: function(callback) {
            //se já tiver os dados retornar
            if (agendaList) {
                callback(agendaList);
                return false;
            } else {
                
                $http({
                    method: 'GET',
                    url: 'data/agenda.json'
                }).success(function(data) {
                    // erros
                    obj.saveAgenda(data);
                    callback(data);

                }).
                error(function() {
                    //error
                });
            }
        },
        saveAgenda: function(data) {
            agendaList = data;
        }
    }

    return obj;
})