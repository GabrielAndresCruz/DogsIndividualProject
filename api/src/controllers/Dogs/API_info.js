const axios = require("axios");
const { apikey } = process.env;

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apikey}`);
    const apiInfo = await apiUrl.data.map((dog) => {
      return {
        id: dog.id,
        name: dog.name,
        min_height: dog.height.metric.split("-")[0].trim(),
        max_height: dog.height.metric.split("-").reverse()[0].trim(),
        min_weight: dog.weight.metric.split("-")[0].trim(),
        max_weight: dog.weight.metric.split("-").reverse()[0].trim(),
        life_span: dog.life_span,
        image: dog.image.url,
        temperament: dog.temperament,
      }
    })
    return apiInfo;
  };

  module.exports= {
    getApiInfo
  }