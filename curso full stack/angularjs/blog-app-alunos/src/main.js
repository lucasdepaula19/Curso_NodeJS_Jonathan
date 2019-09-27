require('angular')
require('angular-route')

require('./js/app.ts')

// index.html
require('./index.html')

// componentes
require('./js/components/create-post/create-post.component')
require('./js/components/home/home.component')
require('./js/components/home/home.component')
require('./js/components/posts/posts.component')
require('./js/components/view-post/view-post.component')
require('./js/components/create-comment/create-comment.component')
require('./js/components/post-comment/post-comment.component')

// serviços
require('./js/services/post.service')
require('./js/services/author.service')

// filros
require('./js/filters/post-photo-url.filter')

// angular file upload
require('angular-file-upload')