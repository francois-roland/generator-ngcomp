'use strict';

(function(){

  /* ngInject */
  var config = function ($stateProvider) {
    $stateProvider
      .state('<%= name %>',{
        url: '<%= route %>',
        templateUrl: '<%= htmlUrl %>',
        controller: '<%= classedName %>Ctrl',
        controllerAs: '<%= classedName =>'
      });
  };

  config
    .$inject = ['$stateProvider'];

  angular
    .module('<%= scriptAppName %>')
    .config(config);

})();
