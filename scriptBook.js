/**
 * Created by stas on 24.02.17.
 */


// Initialize Firebase
var config = {
    apiKey: "AIzaSyB5Wgo5RO_GI5xf6fsaSfH8OdZlx-X7lqw",
    authDomain: "simpleservice-778ef.firebaseapp.com",
    databaseURL: "https://simpleservice-778ef.firebaseio.com",
    storageBucket: "simpleservice-778ef.appspot.com",
    messagingSenderId: "698110095322"
};
firebase.initializeApp(config);


angular
    .module('book', [])
    .controller('appController', appController);

function appController($scope) {
    seets = [];


    $scope.click1 = function () {
        seets.push('1')
        console.log(seets)
    }
    $scope.click2 = function () {
        seets.push('2')
        console.log(seets)
    }
    $scope.click3 = function () {
        seets.push('3')
        console.log(seets)
    }
    $scope.click4 = function () {
        seets.push('4')
        console.log(seets)
    }
    $scope.click5 = function () {
        seets.push('5')
        console.log(seets)
    }
    $scope.click6 = function () {
        seets.push('6')
        console.log(seets)
    }
    $scope.click7 = function () {
        seets.push('7')
        console.log(seets)
    }
    $scope.click8 = function () {
        seets.push('8')
        console.log(seets)
    }
    $scope.click9 = function () {
        seets.push('9')
        console.log(seets)
    }
    $scope.click10 = function () {
        seets.push('10')
        console.log(seets)
    }
    $scope.click11 = function () {
        seets.push('11')
        console.log(seets)
    }
    $scope.click12 = function () {
        seets.push('12')
        console.log(seets)
    }
    $scope.click13 = function () {
        seets.push('13')
        console.log(seets)
    }
    $scope.click14 = function () {
        seets.push('14')
        console.log(seets)
    }
    $scope.click15 = function () {
        seets.push('15')
        console.log(seets)
    }
    $scope.click16 = function () {
        seets.push('16')
        console.log(seets)
    }
    $scope.click17 = function () {
        seets.push('17')
        console.log(seets)
    }
    $scope.click18 = function () {
        seets.push('18')
        console.log(seets)
    }
    $scope.click19 = function () {
        seets.push('19')
        console.log(seets)
    }
    $scope.click20 = function () {
        seets.push('20')
        console.log(seets)
    }
    $scope.click21 = function () {
        seets.push('21')
        console.log(seets)
    }
    $scope.click22 = function () {
        seets.push('22')
        console.log(seets)
    }
    $scope.click23 = function () {
        seets.push('23')
        console.log(seets)
    }
    $scope.click24 = function () {
        seets.push('24')
        console.log(seets)
    }
    $scope.click25 = function () {
        seets.push('25')
        console.log(seets)
    }
    $scope.click26 = function () {
        seets.push('26')
        console.log(seets)
    }
    $scope.click27 = function () {
        seets.push('27')
        console.log(seets)
    }
    $scope.click28 = function () {
        seets.push('28')
        console.log(seets)
    }
    $scope.click29 = function () {
        seets.push('29')
        console.log(seets)
    }
    $scope.click30 = function () {
        seets.push('30')
        console.log(seets)
    }



    $scope.OK = function () {
        mail = $scope.mail;
        var bookRef = firebase.database().ref("book/" + mail);//обрезать точку в мыле или хз
        bookRef.set(
            {
                booking: mail,
                seets: seets
            });

        seets = [];
        console.log(seets)
    }


}