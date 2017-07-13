var tableApp = angular.module("tableApp", []);
  tableApp.controller("tableRegisterCtrl", function($scope) {
    $scope.onlyNumbers = /^\d+$/;
	$scope.orderByField = 'firstName';
  $scope.reverseSort = false;
  //$scope.repassword = $scope.password ;
  $scope.users = [
                      { 'name':'Ajim Premji',
                        'password': 'wipro@123',
                        'repassword':'wipro@123',
                        'fname':'Ajim ',
                        'lname':' Premji',
                        'Email': 'ajim@wipro.com',
                      'phone': 8901123456,
                    'lab':'Angular js ',
                  'com':'Angular js is good technology!!!'},
                      ];
  $scope.addRow = function(){
    $scope.users.push({ 'name':$scope.name, 'password': $scope.password,'repassword': $scope.repassword,
    'fname': $scope.fname,'lname': $scope.lname, 'Email':$scope.Email,
  'phone': $scope.phone, 'lab': $scope.lab, 'com': $scope.com });
    $scope.name='';
    $scope.password='';
    $scope.repassword='';
    $scope.fname='';
    $scope.lname='';
    $scope.Email='';
    $scope.phone='';
    $scope.lab='';
    $scope.com='';
  };
/*
  $scope.removeRow = function(name){
      var index = -1;
      var userArr = eval( $scope.users );
      for( var i = 0; i < userArr.length; i++ ) {
        if( userArr[i].name === name ) {
          index = i;
          break;
        }
      }
      if( index === -1 ) {
        alert( "Something gone wrong" );
      }
      $scope.users.splice( index, 1 );
    };*/
  });

  tableApp.directive('wjValidationError', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctl) {
      scope.$watch(attrs['wjValidationError'], function (errorMsg) {
        elm[0].setCustomValidity(errorMsg);
        ctl.$setValidity('wjValidationError', errorMsg ? false : true);
      });
    }
  };
});