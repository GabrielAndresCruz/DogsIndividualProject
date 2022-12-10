const { Router } = require('express');
const { getApiInfoTemp } = require('../../controllers/Temperament/API_info')

const router = Router();

router.get("/", async(req, res)=>{
    const temperaments = await getApiInfoTemp()
    res.status(200).send(temperaments)
})

module.exports = router;