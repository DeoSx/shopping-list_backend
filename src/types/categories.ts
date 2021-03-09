import { type } from 'os'

export type ItemType = {
  name: string
  note: string
  image: string
  quantity?: number
}

export type CategoriesType = {
  title: { type: String; required: true }
  items: ItemType[]
}
