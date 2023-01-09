const { Router } = require('express');

const getAll = require('./Dogs/GetAll_and_GetOnebyName')
const getById = require('./Dogs/GetOnebyId')
const postDog = require('./Dogs/PostDog')
const deleteDog = require('./Dogs/DeleteDog')
const putDog = require('./Dogs/PutDog')

const getTemp = require('./Temperament/GetAll')

const router = Router();

router.use("/dogs",getAll)
router.use("/dogs",getById)
router.use("/dogs",postDog)
router.use("/dogs",deleteDog)
router.use("/dogs",putDog)

router.use('/temperaments', getTemp)

module.exports = router;
