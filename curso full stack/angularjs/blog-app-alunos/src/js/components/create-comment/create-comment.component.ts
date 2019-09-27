require('./create-comment.component.css')

angular.module('blogApp')
.component('createComment',{
    templateUrl: require('./create-comment.component.html'),
    bindings: {
        postId: '@',
        postSent: '&'
    },
    controller: ['postService', function(postService){
        let ctrl = this

        ctrl.$onInit = function() {
            ctrl.comment = {}
        }

        ctrl.sendComment = async function() {
            try {
                console.log(`${ctrl.postId}`)
                await postService.sendComment(ctrl.postId,ctrl.comment)

                ctrl.postSent()

                ctrl.comment = {}

            } catch (error) {
                console.error(`falha ao enviar o comentário`,error)
            }
        }
    }]
})