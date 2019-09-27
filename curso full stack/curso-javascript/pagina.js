const superagent = require('superagent')

superagent.get("http://google.com").then(response => {
    console.log(response.body)
})