(function() {
  'use strict';

  angular
    .module('app')
    .controller('TypeController', TypeController);

  /** @ngInject */
  function TypeController(Items) {
    var vm = this;

    vm.types = Items.getData('types');

    vm.addType = function (type) {
      Items.addType(type);
    };

    vm.removeType = function (type, event) {
      Items.removeType(type);
      event.stopPropagation();
    };
  }
})();
