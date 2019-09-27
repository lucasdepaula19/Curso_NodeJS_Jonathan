angular.module('blogApp')
.factory('authorService',['$http','endpointApi','$q', function($http,endpointApi,$q){
    return {
        listAll: function() {
            return $q(async (resolve,reject) => {
                let response = 
                await $http.get(endpointApi + '/authors')

                resolve(response.data)
            })
           
        }
    }
}])