// <alerts></alerts>

myBlogApp.directive('alerts', function(){
  return {
    restrict:'E',
    controller:['$scope', function($scope){
        $scope.alerts = [
          {type:'danger', text:'Danger!!!'},
          {type:'info', text:'FYI.'}
        ]
    }],
    replace:true,
    template:'<alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.text}}</alert>'
  }
});