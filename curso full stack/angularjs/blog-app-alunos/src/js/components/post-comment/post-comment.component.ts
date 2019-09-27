angular
.module('blogApp')
.component('postComment',{
    templateUrl: require('./post-comment.component.html'),
    bindings: {
        comment: '<'
    },
    controller: [function(){
        
    }]
})