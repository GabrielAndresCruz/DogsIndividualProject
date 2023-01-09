const { Router } = require('express');
const { Dog} = require('../../db.js')

const router = Router();

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Dog.destroy({
            where: {
                id: id,
            }
        })
        res.status(200).send("Delete Succesfull")  
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;