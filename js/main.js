var app = angular.module('imokApp', []);

app.controller('MainController', ['$scope', function($scope) {

	$scope.castImages = [
		{
			name: "Ron Hanks",
			title: "Director",
			email: "rhanks@gmail.com",
			picture: "images/rhanks.jpg",
			imdb: "imdb.com/rhanks"
		},
		{
			name: "Callie Burke"
		}

	];

}])