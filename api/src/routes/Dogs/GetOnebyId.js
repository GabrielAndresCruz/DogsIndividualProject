const { Router } = require('express');
const { getAllInfo } = require('../../controllers/Dogs/All_info.js')
const router = Router();

router.get("/:id", async(req,res)=>{
    const id = req.params.id
    const idBreed = await getAllInfo()
    if(id){
        const filterBreedById = await idBreed.filter(dog => dog.id == (id))
        filterBreedById ?
        res.status(200).send(filterBreedById) :
        res.status(404).send('There is no breed with that ID')
    }
})

module.exports = router;