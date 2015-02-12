myBlogApp.controller('HomeCtrl',['$scope','$http','$modal','AlertService','$location','UserService',function($scope,$http,$modal,AlertService,$location,UserService){ 

    $scope.posts = [];

    $scope.UserService = UserService;
    $scope.$watchCollection('UserService', function(){
        $scope.currentUser=UserService.currentUser;
    })

    // console.log('location.search: ', $location.search());
    var queryData = $location.search();
    var searchTerm = queryData.q || false;

    var req = {
        url:'/api/post',
        params:{
            'sort':'createdAt desc'
        }
    };

    if (searchTerm){
        req.params.body = '%'+searchTerm+'%'
    }

    $http(req).success(function(data){
        $scope.posts = data;
    });

    $scope.deletePost = function(idx){
        var postId = $scope.posts[idx].id;
        $http.delete('/api/post/' + postId).success(function(data){
            $scope.posts.splice(idx,1);
        }).error(function(err){
            alert(err);
        })
    };

    $scope.editPost = function(idx){
        // console.log('editPost called on idx: ', idx);
        var postIdx = idx;
        $modal.open({
            templateUrl:'/views/post/editModal.html',
            controller:'PostEditModalCtrl',
            resolve:{
                post:function(){
                    return $scope.posts[postIdx]
                }
            }
        }).result.then(function(updatedPost){           // on save
            $scope.posts[postIdx] = updatedPost;
            // console.log('modal saved ', updatedPost);
        }, function(){                                  // on cancel
            alert('modal closed with cancel')
        })

    }


}]);