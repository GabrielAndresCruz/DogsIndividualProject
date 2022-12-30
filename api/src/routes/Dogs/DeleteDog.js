const { Router } = require('express');
const { Dog} = require('../../db.js')

const router = Router();

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await Dog.destroy({
        where: {
            id: id,
        }
    })
    res.status(200).send("Delete Succesfull")
})

module.exports = router;