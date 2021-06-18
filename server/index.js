const { urlencoded } = require('express')
const express = require('express')
const morgan = require('morgan')
const validUrl = require('valid-url')
const Link = require('./models/links')
const getSmallify = require('./functions/getSmallify')
const { findOne } = require('./models/links')
require('./db/mongoose.js')


const app = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('./public'))

const port = process.env.PORT || 3000

//Dynamic endpoint //It checks to see if it exists in the database
app.get('/:user/:domain', async (req, res) => {
    // TODO : create (req.body)
    
    const smallify_db = req.params.user+'/'+req.params.domain
    console.log(smallify_db)
    //Find smallify_db in the database if it exists
    const link = await Link.findOne({smallify: smallify_db})
    if(link){
        console.log(link.url)
        res.status(200).redirect(link.url)
    } else {
        res.status(400).send('There is a problem with the link')
    }
    
})

app.get('/links', async (req, res)=>{
    
})

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



app.listen(port, ()=>{
    console.log(`Listening on PORT : ${port}`)
})