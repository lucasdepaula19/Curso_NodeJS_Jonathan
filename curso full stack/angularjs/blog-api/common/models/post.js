'use strict';

const app = require('../../server/server')


module.exports = function(Post) {
    Post.like = function(postId,cb) {
        new Promise(async (resolve,reject) => {
            let post = await app.models.Post.findById(postId)

            let likes = post.likes
    
            if (!likes) {
                likes = 1
            } else {
                likes++
            }
    
            await post.updateAttribute("likes",likes)

            resolve()
        }).then(() => cb()).catch(error => cb(error))
        
    }

    Post.remoteMethod('like',{
        accepts: {
            arg: 'postId',
            type: 'string',
            required: true
        },
        http: {
            verb: 'post',
            path: '/:postId/like'
        }
    })
};
