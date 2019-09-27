declare var angular;

angular
.module('blogApp',['ngRoute','angularFileUpload'])
.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/posts', {
        template: '<posts></posts>'
    })
    .when('/home',{
        template: '<home></home>'
    })
    .when('/create-post',{
        template: '<create-post></create-post>'
    })
    .when('/view-post',{
        template: '<view-post post-id="{{$resolve.postId}}"></view-post>',
        resolve: {
            postId: ['$location',function($location){
                if ($location.search().postId) {
                    return $location.search().postId
                }
            }]
        }
    })
}])
.constant('endpointApi','http://localhost:3000/api')
.run(['$q',function($q){
    window["Promise"] = $q
}])