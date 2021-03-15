import { Schema, model, Types } from 'mongoose'
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

const Categories = new Schema({
  title: { type: String, required: true },
  items: [Items]
})

export default model<ICategories>('Categories', Categories)
