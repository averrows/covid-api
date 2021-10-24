const mongoose = require('mongoose');
let connected = false
mongoose.connect('mongodb://localhost:27017/covidAPI')
    .then(() => {
        connected = true
    }).catch(err => {
        console.log(err.message)
        throw err
})
if (connected){
    module.exports = mongoose
}


