import { Schema, Document, model } from 'mongoose'

export interface IItems extends Document {
  name: string
  note?: string
  image: string
  quantity?: number
}

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
  }
})

const Categories = new Schema({
  title: { type: String, required: true },
  items: [Items]
})

export default model<IItems>('Categories', Categories)
