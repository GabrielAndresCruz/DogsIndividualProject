const { Router } = require('express');
const { getApiInfoTemp } = require('../../controllers/Temperament/API_info')

const router = Router();

router.get("/", async(req, res)=>{
    try {
        const temperaments = await getApiInfoTemp()
        res.status(200).send(temperaments)  
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;