var app = angular.module('myApp', ['ngAnimate', 'ngRoute', 'ui.router']);


//////Router//////
app.config(function($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/Home');
    $stateProvider
    .state('Home',
    {
        url : '/Home',
        template : 'Use los botones o el menu de arriba para explorar el sitio'
    })
    .state('Ejemplo1',
    {
        url : '/Ejemplo1',
        templateUrl : 'Pages/Ejemplo1/'
    })
    .state('Ejemplo2',
    {
        url : '/Ejemplo2',
        templateUrl : 'Pages/Ejemplo2/'
    })
    .state('Ejemplo3',
    {
        url : '/Ejemplo3',
        templateUrl : 'Pages/Ejemplo3/'
    })
    .state('Ejemplo4',
    {
        url : '/Ejemplo4',
        templateUrl : 'Pages/Ejemplo4/'
    });
});
//////Router//////


//////Controladores del ejemplo1//////
app.controller('e1-TwoWayController', function($scope)
{
    $scope.var = 'PRUEBA 1: two-way binding';
    $scope.message = 'hello world';
    $scope.a = 5+5;
});
app.controller('e1-TodoController', function($scope)
{
  
    $scope.var = 'PRUEBA 2';
    $scope.todos = ['primero','segundo','tercero'];
    $scope.done = function(todo)
    {
           var indexOf = $scope.todos.indexOf(todo);
           if (indexOf != -1)
           {
               $scope.todos.splice(indexOf,1);
           }
    };
    $scope.newTodo = '';
    $scope.add = function(e)
    {
           if ( (e.which) && (e.which === 13) )
               {
                   $scope.todos.push($scope.newTodo);
                   $scope.newTodo = '';
               }
    };
    $scope.add2 = function()
    {
           $scope.todos.push($scope.newTodo);
           $scope.newTodo = '';
    };
});
//////Controladores del ejemplo1//////


//////Controladores y filtro del ejemplo2//////
app.controller('e2-FilterController', function($scope)
{
    $scope.var = '----PRUEBA 1:';
    $scope.ord = 'aa';
    
    $scope.add = function()
    {
        $scope.alg.push({'aa':$scope.aa,'bb':$scope.bb});
        $scope.aa = '';
        $scope.bb = '';
    };
    
    $scope.done = function(x)
    {
        var indexOf = $scope.alg.indexOf(x);
        if (indexOf != -1)
        {
            $scope.alg.splice(indexOf,1);
        }
    };
    $scope.ordenar = function(x)
    {
      $scope.ord = x;
    };
});
app.controller('e2-Filter2Controller', function($scope)
{
    $scope.change="";
});
app.filter('myFormat', function()
{
    return function(x)
    {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++)
        {
            c = x[i];
            if (i % 2 == 0 )
            {
                c= c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
//////Controladores y filtro del ejemplo2//////


//////Controladores del ejemplo3//////
app.controller('e3-HttpController', function($scope, $http)
{
    $scope.var = '----PRUEBA 1:';
    $scope.variable = "";
    $scope.$watch('variable', function()
    {
        if (!$scope.variable)
        {
            $scope.primera = 'Not Found. Something went wrong!';
            $scope.stcd1 = "";
            $scope.sttxt1 = "";
            return;
        }
        $http({ method: "GET", url: 'Pages/Ejemplo3/' + $scope.variable }).then
        (
            function mySuccess(response)
            {
                $scope.myData = response.data.records;
                $scope.primera = "";
                if ( !$scope.myData )
                {
                    $scope.primera = response.data;
                    $scope.mostrar = false;
                }
                else
                {
                    $scope.mostrar = true;
                }
                $scope.stcd1 = response.status;
                $scope.sttxt1 = response.statusText;
            },
            function myError(response)
            {
                $scope.primera = response.statusText + '. Something went wrong!';
                $scope.stcd1 = "";
                $scope.sttxt1 = "";
            }
        );
    }, true);
});
//////Controladores del ejemplo3//////


