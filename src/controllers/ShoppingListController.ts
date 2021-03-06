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

  async fetchOneList(req: Request, res: Response) {
    try {
      const { id } = req.params
      const list = await ShoppingList.findById(id)

      if (!list) {
        return res.status(404).json({ message: 'List not found' })
      }
      res.json(list)

    } catch (e) {
      res.status(500).json({ messages: 'Server error' })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, list } = req.body
      let shoppingList = await ShoppingList.findOne({ name })

      if (shoppingList) {
        return res.status(400).json({ message: 'Shopping list already exists' })
      }

      shoppingList = new ShoppingList({ name, list })

      await shoppingList.save()

      res.status(201).json(shoppingList)

    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

export default new ShoppingListController