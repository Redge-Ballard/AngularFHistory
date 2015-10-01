var app = angular.module('myApp', []); 

app.controller('familyCtrl', function($scope) {

$scope.familyList = [{famText:'Benson Jenderson, Tyler Jenderson, Sonya Attalini', done:false}];

    $scope.familyAdd = function() {
        $scope.familyList.push({famText:$scope.son + ", " + $scope.father + ", " + $scope.mother, done:false});
        $scope.son = "";
        $scope.father = "";
        $scope.mother = "";
    };

    $scope.remove = function() {
        var oldList = $scope.familyList;
        $scope.familyList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.familyList.push(x);
        });
    };
});