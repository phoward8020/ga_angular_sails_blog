myBlogApp.controller('AuthModalCtrl', ['$scope','$http','$modalInstance','UserService',function($scope,$http,$modalInstance,UserService){  

  $scope.cancel = function(){
    $modalInstance.dismiss();
  };

  $scope.login = function(){
    UserService.login($scope.email, $scope.password,function(err,data){
      if(err){
        alert(err);
      } else if (data.user) {
        $modalInstance.close;
      } else {
        alert(data.error);
      }
    });
  };

  $scope.signup = function(){
    //
  }

}])