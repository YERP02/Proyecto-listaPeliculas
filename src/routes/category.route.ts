import express from 'express'
import { Category } from '../types/category.type'
import CategoryService from '../services/category.service'

const router = express.Router()
const service = new CategoryService()


router.post('/', async(req, res) => {
    const Category: Category = req.body;
    const newCategory = await service.create(Category)

    res.status(201).json(newCategory)
})

router.get('/', async (req, res, next) => {
    
    try{
        const categories = await service.findAll()
        //const statusNo = categories ? 200 : 400
        res.status(200).json(categories)
    } catch(error){
        next(error)
    }    
})


router.get('/:id', async (req, res, next) => {
    try {
        const category = await service.findById(req.params.id)
        res.status(200).json(category)
    } catch (error) {
        next(error)
    }
})


export default router