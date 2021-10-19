const parse = require('csvtojson')

/**
 * @param {string} fileDir:
 * @return {Object}
 */
async function parseCSVToObject(fileDir){
    let result
    try{
        result = await parse({delimiter:','}).fromFile(fileDir)
    } catch (e) {
        console.log("ERROR ON PARSING CSV ", fileDir)
    }

    return result
}