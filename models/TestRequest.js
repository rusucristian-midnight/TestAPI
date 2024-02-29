const {Schema, model} = require('mongoose')

const TestRequest = new Schema ({
    json: { type: String, required: true }
})

module.exports = model('TestRequest', TestRequest)