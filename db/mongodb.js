const mongoose = require('mongoose');

let connection =  mongoose.connect('mongodb://localhost:27017/calculatorApp')

if (!connection) {
    connection =  mongoose.connect("mongodb+srv://averus:gzEqw8fOLEJcBVwp@cluster0.qsqin.mongodb.net/calculatorApp?retryWrites=true&w=majority")
}

module.exports = connection