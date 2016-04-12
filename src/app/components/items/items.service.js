(function() {

  angular
    .module('app')
    .service('Items', ItemsService);

  /** @ngInject */
  function ItemsService() {
    var data = {
      items: [
        {name: 'Cat', select: false, type: []},
        {name: 'Bunny', select: false, type: []},
        {name: 'Dog', select: false, type: []}
      ],
      types: [
        {type: 'Cute', check: false},
        {type: 'Funny', check: false},
        {type: 'Small', check: false},
        {type: 'Impudent', check: false},
        {type: 'Noisy', check: false}
      ]
    };
    var selectItems = [];
    var service = {
      addType: addType,
      cleanAll: cleanAll,
      chooseItem: chooseItem,
      getData: getData,
      markAll: markAll,
      pushAnimal: pushAnimal,
      removeType: removeType
    };
    return service;

    function addType(type) {
      if (selectItems.length > 0) {
        selectItems.forEach(function (item) {
          item.type.indexOf(type.type) < 0 ? item.type.push(type.type) : false;
        });
        checkButton();
      }
    }

    function cleanAll() {
      data.types.forEach(function (item) {
        item.check = false;
      });
      data.items.forEach(function (item) {
        item.type.length = 0;
        item.select = false;
      });
      selectItems.length = 0;
    }

    function checkButton() {
      if (selectItems.length > 0) {
        data.types.forEach(function (type) {
          type.check = selectItems.some(function (item) {
            return item.type.some(function (itemType) {
              return itemType == type.type;
            });
          });
        });
      } else {
        data.types.forEach(function (item) {
          item.check = false;
        });
      }
    }

    function chooseItem(item) {
      var index = selectItems.indexOf(item);
      index < 0 ? selectItems.push(item) : selectItems.splice(index, 1);
      checkButton();
    }

    function getData(name) {
      return data[name];
    }

    function markAll() {
      data.types.forEach(function (item) {
        item.check = false;
      });
      data.items.forEach(function (item) {
        item.select = false;
        data.types.forEach(function (type) {
          item.type.indexOf(type.type) < 0 ? item.type.push(type.type) : false;
        });
      });
      selectItems.length = 0;
    }

    function pushAnimal(newAnimal) {
      data.items.push({name: newAnimal, select: false, type: []})
    }

    function removeType(type) {
      selectItems.forEach(function (item) {
        var index = item.type.indexOf(type.type);
        index >= 0 ? item.type.splice(index, 1) : false;
      });
      checkButton();
    }
  }
})();
