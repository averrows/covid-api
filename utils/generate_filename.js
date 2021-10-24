function generateFileNameBasedOnTodayDate(){
    const today = new Date()
    const date = today.getUTCDate() >= 10?today.getUTCDate():"0"+today.getUTCDate()
    const month = today.getUTCMonth()+1>=10?today.getUTCMonth()+1:"0"+(today.getUTCMonth()+1)
    const year = today.getUTCFullYear()

    return `${month}-${date}-${year}.csv`
}

module.exports = {
    generateFileNameBasedOnTodayDate
}