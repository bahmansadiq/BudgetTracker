var app= angular.module('budgetTracker', []);
app.controller('budgetCtrl', ['$scope', function($scope) { 
	$scope.incomeList=[];
	$scope.expenseList=[];
	$scope.totalIncome=0;
	$scope.totalExpense=0;
	$scope.leftOver=0;

	$scope.incomeButton = function(){
		$scope.incomeList.push({
			'description' : $scope.addDescription,
			'amount' : $scope.addIncome
		});


		$scope.totalIncome += parseInt($scope.addIncome);
		$scope.leftOver= parseInt($scope.totalIncome) - parseInt($scope.totalExpense);

		$scope.addDescription="";
		$scope.addIncome="";


	};

	$scope.expenseButton = function(){
		$scope.expenseList.push({
			'description' : $scope.expenseDescription,
			'amount' : $scope.addExpense
		});


		$scope.totalExpense += parseInt($scope.addExpense);
		$scope.leftOver= parseInt($scope.totalIncome) - parseInt($scope.totalExpense);
		$scope.expenseDescription="";
		$scope.addExpense="";
	};




}]);



