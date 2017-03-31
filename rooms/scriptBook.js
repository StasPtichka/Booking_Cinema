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
    
    switch ($scope) {
        case $scope.click1(): seets.push('1') break;
        case $scope.click2(): seets.push('2') break;
        case $scope.click3(): seets.push('3') break;
        case $scope.click4(): seets.push('4') break;
        case $scope.click5(): seets.push('5') break;
        case $scope.click6(): seets.push('6') break;
        case $scope.click7(): seets.push('7') break;
        case $scope.click8(): seets.push('8') break;
        case $scope.click9(): seets.push('9') break;
        case $scope.click10(): seets.push('10') break;
        case $scope.click11(): seets.push('11') break;
        case $scope.click12(): seets.push('12') break;
        case $scope.click13(): seets.push('13') break;
        case $scope.click14(): seets.push('14') break;
        case $scope.click15(): seets.push('15') break;
        case $scope.click16(): seets.push('16') break;
        case $scope.click17(): seets.push('17') break;
        case $scope.click18(): seets.push('18') break;
        case $scope.click19(): seets.push('19') break;
        case $scope.click20(): seets.push('20') break;
        case $scope.click21(): seets.push('21') break;
        case $scope.click22(): seets.push('22') break;
        case $scope.click23(): seets.push('23') break;
        case $scope.click24(): seets.push('24') break;
        case $scope.click25(): seets.push('25') break;
        case $scope.click26(): seets.push('26') break;
        case $scope.click27(): seets.push('27') break;
        case $scope.click28(): seets.push('28') break;
        case $scope.click29(): seets.push('29') break;
        case $scope.click30(): seets.push('30') break;
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
    
    
    
//    $scope.click1 = function () {
//        seets.push('1')
//        console.log(seets)
//    }
//    $scope.click2 = function () {
//        seets.push('2')
//        console.log(seets)
//    }
//    $scope.click3 = function () {
//        seets.push('3')
//        console.log(seets)
//    }
//    $scope.click4 = function () {
//        seets.push('4')
//        console.log(seets)
//    }
//    $scope.click5 = function () {
//        seets.push('5')
//        console.log(seets)
//    }
//    $scope.click6 = function () {
//        seets.push('6')
//        console.log(seets)
//    }
//    $scope.click7 = function () {
//        seets.push('7')
//        console.log(seets)
//    }
//    $scope.click8 = function () {
//        seets.push('8')
//        console.log(seets)
//    }
//    $scope.click9 = function () {
//        seets.push('9')
//        console.log(seets)
//    }
//    $scope.click10 = function () {
//        seets.push('10')
//        console.log(seets)
//    }
//    $scope.click11 = function () {
//        seets.push('11')
//        console.log(seets)
//    }
//    $scope.click12 = function () {
//        seets.push('12')
//        console.log(seets)
//    }
//    $scope.click13 = function () {
//        seets.push('13')
//        console.log(seets)
//    }
//    $scope.click14 = function () {
//        seets.push('14')
//        console.log(seets)
//    }
//    $scope.click15 = function () {
//        seets.push('15')
//        console.log(seets)
//    }
//    $scope.click16 = function () {
//        seets.push('16')
//        console.log(seets)
//    }
//    $scope.click17 = function () {
//        seets.push('17')
//        console.log(seets)
//    }
//    $scope.click18 = function () {
//        seets.push('18')
//        console.log(seets)
//    }
//    $scope.click19 = function () {
//        seets.push('19')
//        console.log(seets)
//    }
//    $scope.click20 = function () {
//        seets.push('20')
//        console.log(seets)
//    }
//    $scope.click21 = function () {
//        seets.push('21')
//        console.log(seets)
//    }
//    $scope.click22 = function () {
//        seets.push('22')
//        console.log(seets)
//    }
//    $scope.click23 = function () {
//        seets.push('23')
//        console.log(seets)
//    }
//    $scope.click24 = function () {
//        seets.push('24')
//        console.log(seets)
//    }
//    $scope.click25 = function () {
//        seets.push('25')
//        console.log(seets)
//    }
//    $scope.click26 = function () {
//        seets.push('26')
//        console.log(seets)
//    }
//    $scope.click27 = function () {
//        seets.push('27')
//        console.log(seets)
//    }
//    $scope.click28 = function () {
//        seets.push('28')
//        console.log(seets)
//    }
//    $scope.click29 = function () {
//        seets.push('29')
//        console.log(seets)
//    }
//    $scope.click30 = function () {
//        seets.push('30')
//        console.log(seets)
//    }

}