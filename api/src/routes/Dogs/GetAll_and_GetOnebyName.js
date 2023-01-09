const { Router } = require('express');
const { getAllInfo } = require('../../controllers/Dogs/All_info.js')
const router = Router();

router.get("/", async(req, res)=>{
    const breed = req.query.name
    try {
        const allBreed = await getAllInfo()
        if (breed) {
            let filterBreed = await allBreed.filter(dog => dog.name.toLowerCase().includes(breed.toLowerCase()))
            filterBreed.length ? 
            res.status(200).send(filterBreed) :
            res.status(404).send('Requested breed not found')
        } else {
            res.status(200).send(allBreed)
        }      
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;