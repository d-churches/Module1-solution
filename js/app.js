(function(){

	var app = angular.module('menuApp', []);

	app.controller('FoodCtrl', ['$scope', function ($scope) {

		$scope.checkMenu = function() {

			if($scope.food == null)
				$scope.res = "¡¡ Please, enter some data first !!"
			else {
				var input = $scope.food.split(",").filter(String);

				if(input.length <= 3)
					$scope.res = "Enjoy!" 
				else
					$scope.res = "Too much!" 
			}

			console.log(input);
	
		};

	}]);

})();