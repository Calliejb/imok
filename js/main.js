var app = angular.module('imokApp', []);

app.controller('MainController', ['$scope', function($scope) {

		$scope.navBar = [
		{
			title: "Home"
		},
		{	title: "Synopsis"
		},
		{	title: "Credits"
		},
		{	title: "Contact"}
	];

	$scope.castImages = [
		{
			name: "Ron Hanks",
			title: "Director",
			email: "rhanks@gmail.com",
			picture: "style/images/rhanks.jpg",
			imdb: "imdb.com/rhanks"
		},
		{
			name: "Elizabeth Hodgman",
			title: "Director of Photography",
			picture: "images/cburke.jpg"
		}

	];

	// $scope.moveTo = function() {
	// 	var position + $(".section").position();
	// 	x = position.top;
	// 	y = position.left;
	// 	window.scrollTo(x,y);
	// }

}]);


function parallax() {
	var scrolled = $(window).scrollTop();
    $('.background').css('top', -(scrolled * 0.3) + 'px');

    $('.oklahoma').css('top', 350 + (-(scrolled * 0.25)) + 'px');

    
    if (scrolled > 250) {
    	$('.title').css('top', 500 + 'px');
    	$('.title').css('position', 'absolute');
    } else {
    	$('.title').css('top', 250 + 'px');
    	$('.title').css('position', 'fixed');
    }
}

$(window).scroll(function(e){
    parallax();
});

$(window).onLoad(function(e) {

});