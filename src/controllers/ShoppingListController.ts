import { Request, Response } from 'express'
import ShoppingList from '../models/ShoppingList'

class ShoppingListController {
  async fetch(req: Request, res: Response) {
    try {
      const shoppingList = await ShoppingList.find({})

      if (!shoppingList) {
        return res.status(400).json({ message: 'Shopping list are not created' })
      }

      res.send(shoppingList)

    } catch (e) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { title, items } = req.body
      let shoppingList = await ShoppingList.findOne({ title })

      if (shoppingList) {
        return res.status(400).json({ message: 'Shopping list already exists' })
      }

      shoppingList = new ShoppingList({ title, items })

      await shoppingList.save()

      res.status(201).json(shoppingList)

    } catch (e) {
      res.status(500).json({ message: 'Server error' })
    }
  }
}

export default new ShoppingListController