function generateFileNameBasedOnTodayDate(){
    const today = new Date()
    const date = today.getUTCDate() >= 10?today.getUTCDate():"0"+today.getUTCDate()
    const month = today.getUTCMonth()+1>=10?today.getUTCMonth()+1:"0"+(today.getUTCMonth()+1)
    const year = today.getUTCFullYear()

    return `${month}-${date}-${year}.csv`
}

function generateFileName(date, month, year){
    const dateRender = date >= 10 ? date : '0'+date
    const monthRender = month >= 10 ? month : '0'+(month)

    return `${monthRender}-${dateRender}-${year}.csv`
}

module.exports = {
    generateFileNameBasedOnTodayDate,
    generateFileName
}