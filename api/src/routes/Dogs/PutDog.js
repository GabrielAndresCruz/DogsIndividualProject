const { Router } = require('express');
const { Dog, Temperament, DogTemperament } = require('../../db.js')

const router = Router();

router.put("/:id", async (req, res) => {

    const { id } = req.params;
    const { name, min_height, max_height, min_weight, max_weight, life_span, image, temperament} = req.body;

    // const dog = await Dog.findByPk(id);

    await DogTemperament.destroy({
        where:{
            DogId: id
        }
    })

    await Dog.update(
        {
        name,
        min_height,
        max_height,
        min_weight,
        max_weight,
        life_span,
        image
        }, {
        where:{
            id: id
        }
    })
    
    const dog = await Dog.findByPk(id)

    const dogTemperament = await Temperament.findAll({
        where: {
            name: temperament
        }
    })


    await dog.addTemperament(dogTemperament)

    res.status(200).send("Dog succesfully modificated")
})

module.exports = router;





//Agrega temperamentos
/*
const dogTemperament = await Temperament.findAll({
        where: {
            name: temperament
        }
    })

    await dogCreate.addTemperament(dogTemperament)
*/