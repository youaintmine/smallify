const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 40
    },
    url : {
        type: String,
        unique : true,
        required : true,
    },
    // desccription : {
    //     type: String,
    //     unique : true,
    //     // required : True,
    //     minLength : 7,
    //     maxLength: 30
    // },
    checkout : {
        type: Number,
        required: true,
        default: 0,
    },
    smallify: {
        type : String,
        required: true
    }
},{
    timestamps: true
})

linkSchema.methods.toJSON = function () {
    const link = this
    const linkObject = link.toObject()
    delete linkObject.url 

    return linkObject
}

linkSchema.methods.incrementCounter = async function () {
    const user = this

    user.checkout++
    await user.save()
}

linkSchema.statics.findByCredentials = async (url ,name) => {
    const link = await Link.findOne({name: name, url: url})

    if(link){
        //It means we have already saved this before
        console.log("Find by credentials is invalid")
        throw new Error('A link with given were already created')
    }
    return link
}

const Link = mongoose.model('Link', linkSchema)

module.exports = Link