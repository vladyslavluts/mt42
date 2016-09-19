var myApp=angular.module('myApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
myApp.controller('itemController', function($scope) {
 	$scope.items = [{
	    category:'Phones',
		isInBasket:0,
        name: 'Nokia Lumia 630',
        year: 2014,
		company:'Nokia',
        price: 200,
        basket:0
    },{
        category:'Phones',
		isInBasket:0,
		name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: 'Samsung',
		basket:0
    },{
        category:'Phones',
		isInBasket:0,
		name: 'Mi 5',
        year: 2015,
        price: 300,
        company: 'Xiaomi',
		basket:0
    },
	 {
        category:'Tablets',
		isInBasket:0,
		name: 'Samsung Galaxy Tab S4',
        year: 2014,
        price: 300,
        company: 'Samsung',
		basket:0
    },{
        category:'Tablets',
		isInBasket:0,
		name: 'LG G PAD 8.3',
        year: 2013,
        price: 180,
        company: 'LG',
		basket:0
    },{
        category:'Tablets',
		isInBasket:0,
		name: 'IdeaTab A8',
        year: 2014,
        price: 220,
        company: 'Lenovo',
		basket:0
    }];
$scope.data = {};
  $scope.setFile = function () {
    if($scope.data.mode=='Tablets')
        return 'tabletsList.html';
    else if($scope.data.mode=='Phones')
        return 'phonesList.html';
	else if($scope.data.mode=='Basket')
        return 'basket.html';
	else if ($scope.data.mode=='Items')
		return 'items.html';
	else if ($scope.data.mode='Search')
		return 'searchResult.html';
};
  $scope.modes = [{
      value: 'Tablets',
      label: 'Планшеты'
  },{
      value: 'Phones',
      label: 'Смартфоны'
  },
  {
      value: 'Items',
      label: 'Все'
  },{
	  value:'Basket',
	  label:'Корзина'
  }
  
  ];
  
   $scope.buyUp = function (answer){
		if (answer.basket<10) {
			answer.basket++;
			answer.isInBasket=1
		}
		
			
		
   };
    $scope.buyDown = function (answer){
        if (answer.basket>0) {
			answer.basket--;
		}
		(answer.basket==0)?answer.isInBasket=0:true;
    };
	$scope.buy = function (answer){
		if (answer.basket<1){
			answer.basket++;
			answer.isInBasket++;
		}
	}
	$scope.search= function(data){

		data.mode="Search";
	}
	
});