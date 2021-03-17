import express from 'express'
import ShoppingListController from '../controllers/ShoppingListController'

const router = express()

router.get('/shopping-list', ShoppingListController.fetch)

export default router