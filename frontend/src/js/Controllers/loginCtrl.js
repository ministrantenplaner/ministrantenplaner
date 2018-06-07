angular.module("ministrantenplaner", []).controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.login = function(username, password) {
		if (username && password){
			console.log(username, password)
			/*$http({
				method: "GET",
				url: "/api/login",
				params: {
					username: username,
					password: password
				}
			}).then(function(response){
				if (response.status) window.location.href = "/home"
				else alert("Falscher Benutzername oder Passwort")
			}, function(response) {
				alert("Es ist ein Fehler aufgetreten: " response.statusText)
			})*/
		} else {
		alert("Bitte Benutzernamen und Passwort angeben");
		}
	}
}]);