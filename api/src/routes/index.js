const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { getAllInfo } = require('../controllers/Dogs/All_info.js')
// const { getApiInfoTemp } = require('../controllers/Temperament/API_info');
// const { Dog, Temperament} = require('../db')
const getAll = require('./Dogs/GetAll_and_GetOnebyName')
const getById = require('./Dogs/GetOnebyId')
const postDog = require('./Dogs/PostDog')

const getTemp = require('./Temperament/GetAll')

const router = Router();

router.use("/dogs",getAll)
router.use("/dogs",getById)
router.use("/dogs",postDog)

router.use('/temperaments', getTemp)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.get("/dogs", async(req, res)=>{
//     const breed = req.query.name
//     const allBreed = await getAllInfo()
//     if (breed) {
//         let filterBreed = await allBreed.filter(dog => dog.name.toLowerCase().includes(breed.toLowerCase()))
//         filterBreed ? 
//         res.status(200).send(filterBreed) :
//         res.status(404).send('Requested breed not found')
//     } else {
//         res.status(200).send(allBreed)
//     }
// })

//REFORMULAR RUTAS!! 
//1- MODULARIZAR!
//2- OCUPAR TRY CATCH!

// router.get("/dogs/:id", async(req,res)=>{
//     const id = req.params.id
//     const idBreed = await getAllInfo()
//     if(id){
//         const filterBreedById = await idBreed.filter(dog => dog.id == (id))
//         filterBreedById ?
//         res.status(200).send(filterBreedById) :
//         res.status(404).send('There is no breed with that ID')
//     }
// })

// router.get("/temperaments", async(req, res)=>{
//     const temperaments = await getApiInfoTemp()
//     res.status(200).send(temperaments)
// })


// router.post("/dogs", async(req, res)=>{
//     const {
//         name,
//         min_height,
//         max_height,
//         min_weight,
//         max_weight,
//         life_span,
//         image, 
//         createInDb,
//         temperament
//     } = req.body

//     const dogCreate = await Dog.create({
//         name,
//         min_height,
//         max_height,
//         min_weight,
//         max_weight,
//         life_span,
//         image,
//         createInDb
//     })

//     const dogTemperament = await Temperament.findAll({
//         where: {
//             name: temperament
//         }
//     })

//     await dogCreate.addTemperament(dogTemperament)

//     res.status(201).send("Dog succesfully created!")
// })

module.exports = router;
