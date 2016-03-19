var mainApp = angular.module('app', []);

mainApp.controller('mainCtrl', function() {
});



mainApp.directive('myForm', function() {
	return {
		restrict: "E",
		templateUrl: "opt-in.html"
	}
});

mainApp.directive('optIn', function() {
	return {
		restrict: "E",
		template: "<div class='container'><ng-transclude></ng-transclude><sign-up-form></sign-up-form></div>",
		transclude: true,
		replace: true
	}
});
mainApp.directive('signUpForm', function() {
	return {
		restrict: "E",
		require: "^optIn",
		template: "<form><first-name></first-name><last-name></last-name><email></email><submit-button></submit-button></form>",
		transclude: true,
		replace: true
	}
});
mainApp.directive('firstName', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<input name='first-name' type='text' placeholder='First Name' required />",
		transclude: true,
		replace: true
	}
});
mainApp.directive('lastName', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<input name='last-name' type='text' placeholder='Last Name' required />",
		transclude: true,
		replace: true
	}
});
mainApp.directive('email', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<input name='email' type='text' placeholder='Email' required />",
		transclude: true,
		replace: true
	}
});
mainApp.directive('submitButton', function() {
	return {
		restrict: "E",
		require: "^signUpForm",
		template: "<button id='submit' type='submit'>Giv Me Yr Infoz</button>",
		transclude: true,
		replace: true
	}
});

