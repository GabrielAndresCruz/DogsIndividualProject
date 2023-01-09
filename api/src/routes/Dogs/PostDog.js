const { Router } = require('express');
const { Dog, Temperament} = require('../../db')

const router = Router();

router.post("/", async(req, res)=>{
    const {
        name,
        min_height,
        max_height,
        min_weight,
        max_weight,
        life_span,
        image, 
        createInDb,
        temperament
    } = req.body

    try {
        const dogCreate = await Dog.create({
            name,
            min_height,
            max_height,
            min_weight,
            max_weight,
            life_span,
            image,
            createInDb
        })
    
        const dogTemperament = await Temperament.findAll({
            where: {
                name: temperament
            }
        })
    
        await dogCreate.addTemperament(dogTemperament)
    
        res.status(201).send("Dog succesfully created!")
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;