'use strict';
(function () {

  //Initialisation du module AngularJS et du module xeditable.
  var app = angular.module('CamApp', []);

  //Controleur principal de l'app AngularJS
  app.controller('CamController', function ($scope, $http) {
    //$scope.tableEmp = false;
    // Déclaration de l'URL du Serveur REST
    var url = 'http://localhost/API_Rest/back/user';
    
    //Méthode GET -> Récupérer et afficher les données
      $http.get(url)
        .success(function(resultat) {
          $scope.users = resultat;
      });

});

})();
