import Categories from '../models/category.model'
import { Category, CategoryModel } from '../types/category.type'
import boom from '@hapi/boom'

class CategoryService {
  async create(category: Category) {
    const newCategory = await Categories.create(category).catch((error) => {
      console.log('Could not save category')
      console.log(error)
    })
    return newCategory
  }
  async findAll(filters) {
    const categories = await Categories.find({ ...filters }).catch((error) => {
      console.log('Error while connecting to the DB ', error)
    })
    if (Categories) {
      throw boom.notFound('There are categories')
    }

    return categories
  }

  async findById(id: string) {
    const category = await Categories.findById(id).catch((error) => {
      console.log('Error while connecting to the DB ', error)
    })

    if (!category) {
      throw boom.notFound('Category not faund')
    }

    return category
  }

  async findByName(name: string) {
    const category = await Categories.findOne({ name }).catch((error) => {
      console.log('Error while connecting to the DB', error)
    })

    if (!category) {
      throw boom.notFound('Category not found')
    }
  }
}

export default CategoryService
