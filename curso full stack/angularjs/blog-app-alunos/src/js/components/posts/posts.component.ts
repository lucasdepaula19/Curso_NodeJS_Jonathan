angular
    .module('blogApp')
    .component('posts', {
        templateUrl: require('./posts.component.html'),
        controller: ['postService', '$scope', function (postService, $scope) {
            let ctrl = this

            ctrl.$onInit = async function () {

                ctrl.posts = await postService.listAll()
            }
        }]
    })