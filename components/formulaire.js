'use strict';
(function () {

  //Initialisation du module AngularJS et du module xeditable.
  var app = angular.module('CamApp', ['ngTable']);

  //Controleur principal de l'app AngularJS
  app.controller('CamController', function ($scope, $http, ngTableParams) {
    var url = 'http://localhost/API_Rest/back/user';                 
    
    $scope.users = [];
    
    // Déclaration de l'URL du Serveur REST
    $scope.affichageTable = function() {
        $http.get(url).success(function(resultat) {$scope.users = resultat});
        setTimeout($scope.affichage, 1000);
    };
    $scope.affichageTable();
    //Méthode GET -> Récupérer et afficher les
      $scope.affichage = function() {
        if($scope.users.length !== 0) {
          $scope.tableParams = new ngTableParams({
            page: 1,            
            count: 3          
            }, {
                total: $scope.users.length,
                getData: function($defer, params) {
                    alert($scope.users.length);
                    $defer.resolve($scope.users.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
                });
        };
      };
      $scope.affichage();
});

})();
