const axios = require("axios");
const { apikey } = process.env;
const { Temperament } = require('../../db')

const getApiInfoTemp = async() => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`)
    const apiInfo = await apiUrl.data
    const apiTemp = apiInfo.map(temp => temp.temperament).join().split(",").sort()
    await apiTemp
    .filter((temp, index) => apiTemp.indexOf(temp) === index)
    .forEach(dog => {
        dog.trim() !== "" &&
        Temperament.findOrCreate({
            where: {
                name: dog.trim()
            }
        })
    })
    // console.log(apiInfo);
    const apiTemperaments = Temperament.findAll({
        order: ["name"]
    })
    return apiTemperaments
}

module.exports = {
    getApiInfoTemp
}