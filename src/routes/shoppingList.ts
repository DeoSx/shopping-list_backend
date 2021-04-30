import express from 'express'
import ShoppingListController from '../controllers/ShoppingListController'

const router = express()

router.get('/shopping-list', ShoppingListController.fetch)
router.get('/shopping-list/:id', ShoppingListController.fetchOneList)
router.post('/shopping-list/create', ShoppingListController.create)


export default router
