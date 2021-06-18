const { urlencoded } = require('express')
const express = require('express')
const morgan = require('morgan')
const validUrl = require('valid-url')
const Link = require('./models/links')
const getSmallify = require('./functions/getSmallify')
require('./db/mongoose.js')


const app = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('./public'))

const port = process.env.PORT || 3000


app.post('/api/smallify',async (req,res) => {
    console.log(req.body)
    const {url, name} = req.body

    try {
        //Check if link given is valid
        if(!validUrl.isUri(url)){
            throw new Error('The URI is not valid')
        }
        //Check if link already exist
        await Link.findByCredentials(url, name)

        _smallify = getSmallify(name, url)
        // console.log(_smallify)

        const link = new Link({
            name: name,
            url : url,
            checkout : 0,
            smallify : _smallify
        })

        await link.save()
        await link.incrementCounter()
        res.status(201).send({link})
    } catch (e) {
        console.log("Catching errors in index.js")
        console.log(e)
        res.status(400).send(e)
    }
})

// app.post('/:name', (req, res) => {
//     // TOFO : create (req.body)
// })

app.listen(port, ()=>{
    console.log(`Listening on PORT : ${port}`)
})