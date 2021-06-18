// const { response } = require("express");

new Vue({
    el: '#app',
    data: {
        success: 'false',
        name: '',
        url: '',
        domain: '',
        short: '',
        error: 'true'
    },
    methods: {
        createSmallify() {
            const body = {
                name: this.name,
                url: this.url
            }
            // lopbody = JSON.stringify(body)
            fetch('/api/smallify', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => {
                // if(!response.ok) {
                // console.log(response)
                // 'Validation URL wrong',
                // throw new Error(response);
            // } else {
                console.log(response)
                return response.json()
            // }
            }).then(result => {
                if(!(JSON.stringify(result) === '{}')) {
                    console.log(result)
                    this.success = true
                    this.short = result.link.smallify
                    this.domain = 'smallify.ly/'
                } else{
                    throw new Error('The link cannot be created due to name already taken or invalid URL')
                }
                    // console.log(result.link.smallify)
            }).catch(e =>{
                this.error = false
                console.log(e)
            })
            // console.log(body._name, body._url)
        }
    }
});