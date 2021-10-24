const parse = require('csvtojson')

/**
 * @param {string} dataString:
 * @return {Object}
 */
async function parseCSVToObject(dataString){
    let result
    try{
        result = await parse({delimiter:','}).fromString(dataString)
    } catch (e) {
        console.log("ERROR ON PARSING CSV ")
    }

    return result
}

module.exports = {parseCSVToObject}