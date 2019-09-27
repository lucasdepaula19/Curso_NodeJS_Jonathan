angular
    .module('blogApp')
    .component('createPost', {
        templateUrl: require('./create-post.component.html'),
        controller: ['authorService', '$scope', 'postService', '$location', 'FileUploader', 'endpointApi',
            function (authorService, $scope, postService, $location, FileUploader, endpointApi) {
                let ctrl = this

                ctrl.uploader = new FileUploader({
                    url: `${endpointApi}/PostPhotoContainers/main/upload`
                })

                ctrl.errorSendingPhoto = false

                ctrl.$onInit = async function () {
                    ctrl.post = {}

                    authorService.listAll().then(authors => {
                        console.log(`número de autores retornados: ${authors.length}`)
                        ctrl.authors = authors
                    })


                    // ctrl.authors = await authorService.listAll()
                    // console.log(`número de autores retornados: ${ctrl.authors.length}`)


                }

                ctrl.save = async function () {
                    try {
                        let savedPost = await postService.save(ctrl.post)

                        if (ctrl.uploader.queue && ctrl.uploader.queue.length > 0) {

                            try {
                                

                                await new Promise((resolve, reject) => {
                                    let fileItem = ctrl.uploader.queue[0]
                                    
                                    fileItem.file.name = savedPost.id;

                                    fileItem.onSuccess = function () {
                                        resolve()
                                    }

                                    fileItem.onError = function() {
                                        reject()
                                    }

                                    fileItem.upload()
                                })

                                ctrl.errorSendingPhoto = false

                                $location.path('/posts')

                            } catch (error) {
                                console.error(`falha ao enviar o arquivo`,error)
                                ctrl.errorSendingPhoto = true
                            }
                            

                        } else {
                            $location.path('/posts')
                        }

                        

                    } catch (error) {
                        console.error(error)
                        alert("Failed")

                    }
                }
            }]
    })