var app8 = angular.module('app8', []);

app8.controller('mainCtrl', function($scope){
	$scope.students = [
	{name:'George Thomas', gpa:3.5},
	{name:'Susy Smith', gpa:3.6},
	{name:'Paul Marks', gpa:3.2},
	{name:'Sue Edgar', gpa: 3.8}
	];
	
	$scope.student = {
		gpas:[
		{name:'George Thomas', gpa:3.5},
		{name:'Susy Smith', gpa:3.6},
		{name:'Paul Marks', gpa:3.2},
		{name:'Sue Edgar', gpa: 3.8}
		]
	};
	
	$scope.currDate = new Date();
	
	$scope.randomStr = "this is a random string by janish patel";
	
	$scope.randArray = [
		'Tomato', 'Potato', 'Bread', 'Pickles', 'Raisins'
	];
	
	$scope.weather = [
	{day:'Monday', rain:true},
	{day:'Tuesday',rain:false}
	];
})
