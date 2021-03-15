import { Request, Response } from 'express'
import Categories from '../models/Categories'
class CategoryController {
  async fetch(req: Request, res: Response) {
    try {
      const categories = await Categories.find({})

      if (!categories) {
        return res
          .status(400)
          .json({ message: 'Categories not found or ot exist yet' })
      }

      return res.send(categories)
    } catch (e) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { title } = req.body

      let category = await Categories.findOne({ title })

      if (category) {
        return res.status(400).json({ message: 'Category already exists' })
      }

      category = new Categories({ title, items: [] })

      await category.save()

      res.status(201).json(category)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }

  async createItem(req: Request, res: Response) {
    try {
      const { title, name, note, image, categoryId } = req.body

      let category = await Categories.findOne({ title })

      if (!category) {
        return res.status(404).json({ message: 'Category not found' })
      }

      category.items = [...category.items, { name, note, image, categoryId }]

      await category.save()

      res.status(201).json(category)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

export default new CategoryController()
