import express from 'express'
import CategoryController from '../controllers/CategoryController'

const router = express()

router.get('/categories', CategoryController.fetch)
router.post('/categories', CategoryController.create)
router.put('/categories/item', CategoryController.createItem)

export default router
