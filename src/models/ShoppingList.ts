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

export const ShoppingList = new Schema({
  title: { type: String, required: true },
  items: [Items]
})

export default model<ICategories>('shopping-list', ShoppingList)