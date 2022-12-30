const { Router } = require('express');
const { Dog } = require('../../db.js')

const router = Router();

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, min_height, max_height, min_weight, max_weight, life_span, image, temperament} = req.body;
    await Dog.update(
        req.body, {
        where:{
            id: id
        }
    })
    res.status(200).send("Dog succesfully modificated")
})

module.exports = router;