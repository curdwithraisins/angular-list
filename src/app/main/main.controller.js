(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Items) {
    var vm = this;

    vm.markAll = function () {
      Items.markAll();
    };

    vm.cleanAll = function () {
      Items.cleanAll();
    }
  }
})();
