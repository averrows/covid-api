function generateNowUTCDate(){
    const today = new Date()
    return today.toDateString()
}

module.exports = {generateNowUTCDate}