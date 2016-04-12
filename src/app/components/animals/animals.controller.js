(function() {
  'use strict';

  angular
    .module('app')
    .controller('AnimalController', AnimalController);

  /** @ngInject */
  function AnimalController(Items) {
    var vm = this;

    vm.items = Items.getData('items');

    vm.chooseItem = function (item) {
      Items.chooseItem(item);
    };

    vm.addAnimal = function (newAnimal) {
      if (!vm.filtedAnimals.length) {
        Items.pushAnimal(newAnimal);
      }
    };
  }
})();
