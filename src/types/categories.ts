import { Document } from 'mongoose'

export type ItemType = {
  name: string
  note: string
  image: string
  quantity?: number
}

export interface ICategories extends Document {
  title: { type: String; required: true }
  items: ItemType[]
}
