const { getApiInfo } = require("./API_info")
const { getDbInfo } = require("./DataBase_info")

const getAllInfo = async () => {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const infoTotal = apiInfo.concat(dbInfo)
    return infoTotal
}

module.exports = {
    getAllInfo
}