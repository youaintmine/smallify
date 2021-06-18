const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/links-add', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('Connected MongoDB')
})

// process.env.MONGOOSE_CONNECT_KEY