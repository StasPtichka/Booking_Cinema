//Стас
//  var config = {
//      apiKey: "AIzaSyB5Wgo5RO_GI5xf6fsaSfH8OdZlx-X7lqw",
//      authDomain: "simpleservice-778ef.firebaseapp.com",
//      databaseURL: "https://simpleservice-778ef.firebaseio.com",
//     storageBucket: "simpleservice-778ef.appspot.com",
//     messagingSenderId: "698110095322"
//  };
// firebase.initializeApp(config);

//Дима
var config = {
    apiKey: "AIzaSyAzreIAAimmDA0-jAiqwtQZdx9gasNKONw",
    authDomain: "booking-48d90.firebaseapp.com",
    databaseURL: "https://booking-48d90.firebaseio.com",
    storageBucket: "booking-48d90.appspot.com",
    messagingSenderId: "272973760259"
};
firebase.initializeApp(config);

var appHome = angular.module('appHome', []);

    appHome.controller('Create', function ($scope) {
        $scope.btnCreate = function () {
            email = $scope.email;
            pass = $scope.pass;
            passRetry = $scope.passRetry;
            $scope.btn = '';
            $scope.pass = $scope.btn;
            $scope.passRetry = $scope.btn;
            checked = false;
            $scope.check = true;

            if (pass !== passRetry) {
                alert("Пароли не совпадают!!!")
            } else {
                firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
                    if (error.code) {
                        alert(error.message);
                    } else {
                        alert("Регистрация аккаунта прошла успешно!!!")
                    }
                });
            }
        }
    });