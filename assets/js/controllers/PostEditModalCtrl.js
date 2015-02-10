myBlogApp.controller('PostEditModalCtrl', ['$scope', '$http', '$modalInstance', 'post', function($scope, $http, $modalInstance, post){

  $scope.title = post.title
  $scope.body = post.body

  $scope.save = function(){
    var postData = {
      title: $scope.title,
      body: $scope.body
    }
    $http.put('/.api/post/'+post.id, postData)
     .success(function(data){
        $modalInstance.close(data);
     })
     .error(function(err){
        alert(err);
     })


  }

  $scope.cancel = function(){
    $modalInstance.dismiss();
  }


}]);