angular.module('app9', [])
  .directive("jqlDirective", function() {
    return function(scope, element, attrs) {

      // Get the children of the element tied to the directive
      var players = element.children();

      var listOfPlayers = "";
      // Cycle through the list of children
      for(i = 0; i < players.length; i++){
      // Modifying HTML Elements

        // Check item for the value Barry Bonds
        if(players.eq(i).html() == "Barry Bonds"){

          // Change text color for the matching element
          players.eq(i).css("color", "red");

          // Add an attribute
          players.eq(i).attr("number", "25");
        }

        // Check item for the value Hank Aaron
        if(players.eq(i).html() == "Hank Aaron"){

          // Add a class to an element
          players.eq(i).addClass("thick");
        }

		listOfPlayers += players.eq(i).text() + ',';
		
		angular.element(document.querySelector('#childrenList')).html(listOfPlayers);
		
		var barrysNum = angular.element(document.querySelector('#barry')).attr('number');
		
		angular.element(document.querySelector('#barrysNumber')).text(barrysNum);
		
		angular.element(document.querySelector('#hank')).removeClass("thick");
		
		var isHankBold = angular.element(document.querySelector('#hank')).hasClass('thick');
		
		angular.element(document.querySelector('#hankBold')).text(isHankBold);
		
		var barryID = angular.element(document.querySelector('#barry')).prop('id');
		
		angular.element(document.querySelector('#barrysID')).text(barryID);
      }


    }
  })
  .controller("mainCtrl", function($scope) {
	$scope.unBold = function(){
		angular.element(document.querySelector('#hank')).toggleClass('thick');
	}

})