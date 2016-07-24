var app = angular.module('myApp', ['ngRoute']).config(
    function($routeProvider) {
        /*ROTAS*/
        $routeProvider
            .when('/cad', {
                templateUrl: 'templates/cad.html',
                controller: 'cad'
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
            });
        }).run(function() {
    //remove 300ms delay touch
    FastClick.attach(document.body);
});

 



 app.controller('cad', function($scope, $routeParams, cad) {
    $scope.cad = {};
    //factory obter agenda
    cad.getAgenda(function(data) {
        $scope.cad = data;
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


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* -----------------------------------------------------------LOgica Do APP------------------------------------------------------------------------------------------------*/
// Prisma regular Com 5 lados ou mais
 function Dados5(){
                    var ArestadaBase = document.calcform.ArestadaBase.value;
                    var NumerodeLados = document.calcform.NumerodeLados.value;
                    var p =((NumerodeLados * ArestadaBase) / 2);

                    var graus = 180/ NumerodeLados;
                    var angulo = Math.sin(graus); 
                    var x = (((ArestadaBase/2) * (ArestadaBase/2)) + (angulo * angulo));
                    var xx =  Math.sqrt(x);
                    var res = xx;
                    
                    if(NumerodeLados<5){
                        Materialize.toast('Número de lados menor que cinco', 4000)
                    } else if(!isNumber(ArestadaBase)) {
                        Materialize.toast('Verifique a Aresta da base!', 4000)
                    } else{
                      document.calcform.res.value = res;
                    }
                        
                }

// Função que verifica se é um numero
 function isNumber(n) {
                  return !isNaN(parseFloat(n)) && isFinite(n);
                }

function toTop(){
        $('html, body').animate({
        scrollTop: 0
        }, 800, 'linear');
}

//Prisma Regular com 3 lados
function CalPrisma3LadoRegular(){
                   var ArestadaBase = document.calcform2.ArestadaBase.value;
                   var AreaBase = ArestadaBase * (Math.sqrt(3/4));
                   var AreaDuasBases = AreaBase * 2 ;

                    if(isNumber(ArestadaBase)==false){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if (ArestadaBase<=0 ){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform2.res.value = AreaDuasBases;
                      }
                } 

//Prisma Irregular com 3 lados e medida dos tres
function CalPrismaIrregularComMedidaDos3lados(){
                   var ladoA = document.calcform.LadoA.value;
                   var ladoB = document.calcform.LadoB.value;
                   var ladoC = document.calcform.LadoC.value;
                   var perimetro = (ladoA + ladoB + ladoC)/2;
                   var x = perimetro * ( perimetro - ladoA) * (perimetro - ladoB) * (perimetro - ladoC);
                   var AreaBase = Math.sqrt(x);
                   var AreaDuasBases =  AreaBase * 2;


                    if((isNumber(ladoA)==false) || (isNumber(ladoB)==false) || (isNumber(ladoC)==false)) {
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ( (ladoA <= 0) || (ladoB <= 0) || (ladoB <= 0) ){
                       Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }
                }  

// Prisma Irregular com 2 lados e medida do angulo entre eles
function CalPrisma2ladosAgulo(){
                   var ladoA = document.calcform.LadoA.value;
                   var ladoB = document.calcform.LadoB.value;
                   var angulo = document.calcform.angulo.value;
                   var x = Math.sin(angulo);
                   var AreaBase = ladoA * ladoB * (x/2);
                   var AreaDuasBases =  AreaBase * 2;


                    if((isNumber(ladoA)==false) || (isNumber(ladoB)==false) || (isNumber(angulo)==false)) {
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ( (ladoA <= 0) || (ladoB <= 0) || (angulo <= 0) ){
                       Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }


}         

// Prisma Irregular com 2 base e altura
function CalPrismaBaseEAltura(){
                   var base = document.calcform.Base.value;
                   var altura = document.calcform.Altura.value;
                   var AreaBase = base * altura;
                   var AreaDuasBases =  AreaBase * 2;


                    if((isNumber(base)==false) || (isNumber(altura)==false)) {
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ( (base <= 0) || (altura <= 0)){
                       Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }

}         
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Prisma Regular com 4 lados
function CalPrismaRegular4lados(){
                   var ArestadaBase = document.calcform.ArestadaBase.value;
                   var AreaBase = ArestadaBase * ArestadaBase;
                   var AreaDuasBases = AreaBase * 2 ;

                    
                    if(isNumber(ArestadaBase)==false){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if (ArestadaBase<=0 ){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }
                }  

// Prisma Irregular paralelogramo
function CalPrismaParalelogramo(){
                   var ArestadaBase = document.calcform.ArestadaBase.value;
                   var ArestadaBase2 = document.calcform.ArestadaBase2.value;
                   var AreaBase = ArestadaBase * ArestadaBase2;
                   var AreaDuasBases = AreaBase * 2 ;

                    
                    if((isNumber(ArestadaBase)==false) || (isNumber(ArestadaBase2)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((ArestadaBase<=0 )|| (ArestadaBase2<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }
                } 

// Prisma Irregular trapezio
function CalPrismaTrapezio(){
                   var baseMenor = document.calcform.baseMenor.value;
                   var baseMaior = document.calcform.baseMaior.value;
                   var altura = document.calcform.altura.value;
                   var AreaBase = (baseMenor * baseMaior) * altura/2;
                   var AreaDuasBases = AreaBase * 2 ;

                    
                    if((isNumber(baseMenor)==false) || (isNumber(baseMaior)==false) || (isNumber(altura)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((baseMenor<=0 )|| (baseMaior<=0) || (altura<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }
                } 

// Prisma Irregular losango
function CalPrismaLosango(){
                   var diagonalMenor = document.calcform.diagonalMenor.value;
                   var diagonalMaior = document.calcform.diagonalMaior.value;
                   var AreaBase = diagonalMenor * (diagonalMaior/2);
                   var AreaDuasBases = AreaBase * 2 ;

                    
                    if((isNumber(diagonalMenor)==false) || (isNumber(diagonalMaior)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((diagonalMenor<=0 )|| (diagonalMaior<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }
                } 
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// -------------------------------------------------Area Lateral------------------------------------------------------------------------------------------
// Area Lateral Reta do Prisma
function CalPrismaAreaLateralReta(){
                   var numLados = document.calcform.numLados.value;
                   var arestaLateral = document.calcform.arestaLateral.value;
                   var arestaBase = document.calcform.arestaBase.value;
                   var umaFaceLateral = arestaLateral * arestaBase;
                   var AreaLateral = umaFaceLateral * numLados ;                    
                     
                    if((isNumber(numLados)==false) || (isNumber(arestaLateral)==false) || (isNumber(arestaBase)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((numLados<=0 )|| (arestaLateral<=0) || (arestaBase<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaLateral;
                      }
                } 
   // Area Lateral Oblíqua do Prisma, Aresta da base e altura             
function CalPrismaAreaLateralObliquaArestaBaseEAltura(){
                   var numLados = document.calcform.numLados.value;
                   var arestaBase = document.calcform.arestaBase.value;
                   var altura = document.calcform.altura.value;
                   var umaFaceLateral = arestaBase * altura;
                   var AreaLateral = umaFaceLateral * numLados ;                    
                     
                    if((isNumber(numLados)==false) || (isNumber(altura)==false) || (isNumber(arestaBase)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((numLados<=0 )|| (altura<=0) || (arestaBase<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaLateral;
                      }
                } 
   // Area Lateral Oblíqua do Prisma, Aresta da base Aresta Base e angulo            
function CalPrismaAreaLateralObliquaArestaBaseELateralEAngulo(){
                   var arestaLateral = document.calcform.arestaLateral.value;
                   var numLados = document.calcform.numLados.value;
                   var arestaBase = document.calcform.arestaBase.value;
                   var angulo = document.calcform.angulo.value;
                   
                   var x = Math.sin(angulo);
                   var h = x * arestaBase;
                   var umaFaceLateral = arestaBase * h;
                   var AreaLateral = umaFaceLateral * numLados ;                    
                     
                    if((isNumber(numLados)==false) || (isNumber(angulo)==false) || (isNumber(arestaBase)==false) || (isNumber(arestaLateral)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((numLados<=0 )|| (angulo<=0) || (arestaBase<=0) || (arestaBase<=0) ){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaLateral;
                      }
                } 

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// ------------------------------------------------Volume Prisma------------------------------------------------------------------------------------------
// Volume regular prisma
function CalPrismaRegularVolume(){
                   var areaBase = document.calcform.areaBase.value;
                   var altura = document.calcform.altura.value;
                   var volume = areaBase * altura;
                   

                    if((isNumber(areaBase)==false) || (isNumber(altura)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((areaBase<=0) || (altura<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = volume;
                      }
                } 
// Volume Irregular prisma
function CalPrismaIrregularVolume(){
                   var areaBase = document.calcform.areaBase.value;
                   var angulo = document.calcform.angulo.value;
                   var arestaLateral = document.calcform.arestaLateral.value;
                   var seno = Math.sin(angulo);
                   var h = seno * arestaLateral
                   var volume = areaBase * h;
                   

                    if((isNumber(areaBase)==false) || (isNumber(arestaLateral)==false) || (isNumber(angulo)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((areaBase<=0) || (angulo<=0) || (arestaLateral<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = volume;
                      }
                } 
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// ------------------------------------------------CILINDRO------------------------------------------------------------------------------------------
// Area da base cilindro
function CalCilindroAreaBase(){
                   var raio = document.calcform.raio.value;
                   var x = Math.pow(raio,2);
                   var areaBase = 3.14 * x;
                   var AreaDuasBases = areaBase * 2;

                    if((isNumber(raio)==false)){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((raio<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaDuasBases;
                      }
                } 
// area lateral do cilindro reto
function CalCilindroAreaLateralReto(){
                   var raio = document.calcform.raio.value;
                   var altura = document.calcform.altura.value;
                   var AreaLateral = 3.14 * 2 * raio * altura ;


                    if((isNumber(raio)==false) || (isNumber(altura)==false) ){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((raio<=0) || (altura<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaLateral;
                      }
                } 
// area lateral do cilindro obliquo
function CalCilindroAreaLateralObliquo(){
                   var geratriz = document.calcform.geratriz.value;
                   var angulo = document.calcform.angulo.value;
                   var h = Math.sin(angulo) * geratriz;
                   var AreaLateral = 3.14 * 2 * geratriz * h ;


                    if((isNumber(geratriz)==false) || (isNumber(angulo)==false) ){
                        Materialize.toast('Informe somente números!', 4000)
                     }else if ((geratriz<=0) || (angulo<=0)){
                        Materialize.toast('Informe um número maior que zero!', 4000)
                     }else{
                      document.calcform.res.value = AreaLateral;
                      }
                } 