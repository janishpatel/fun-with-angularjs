angular.module('weatherFilters', []).filter('raining',
function(){
	return function(input){
		return input ? 'janish' : 'patel';
	}
});