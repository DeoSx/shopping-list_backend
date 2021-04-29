import { model, Schema, Types } from 'mongoose'
import { ICategories } from '../types/categories'

const Items: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  categoryId: {
    type: Types.ObjectId,
    ref: 'Categories',
    required: true
  }
})

const List: Schema = new Schema({
  title: {
    type: String
  },
  items: [Items]
})

export const ShoppingList = new Schema({
  name: { type: String, required: true },
  list: [List],
  createdAt: { type: Date, default: new Date() }
})

export default model<ICategories>('shopping-list', ShoppingList)
