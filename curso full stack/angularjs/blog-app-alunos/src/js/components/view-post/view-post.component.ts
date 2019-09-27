angular
.module('blogApp')
.component('viewPost',{
    templateUrl: require('./view-post.component.html'),
    bindings: {
        postId: '@'
    },
    controller: ['postService','$scope', function(postService,$scope){
        let ctrl = this

        ctrl.$onInit = function() {
            ctrl.updatePost()
        }

        ctrl.updatePost = async function() {
            try {
                ctrl.post = await postService.get(ctrl.postId)

            } catch (error) {
                console.error(error)
                alert('Failed to load post ' + ctrl.postId)
            }
        }

        ctrl.commentSent = function() {
            console.log(`comentário enviado`)
            ctrl.updatePost()
        }
    }]
})
