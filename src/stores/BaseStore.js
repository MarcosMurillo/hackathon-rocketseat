import { extendObservable } from 'mobx'

class BaseStore {
  constructor(service) {
    this.service = service

    extendObservable(this, {
      all: null,
      one: null
    })
  }

  /**
   * Loads all items
   */
  async loadAll() {
    this.all = await this.service.list()
    return this.all
  }

  /**
   * Loads a single item
   * @param {Integer} id The item id
   * @param {String} query Custom URL query
   */
  async loadOne(id, query = '') {
    this.one = await this.service.get(id, query)
    return this.one
  }

  /**
   * Creates a new item
   * @param {Object} data The item data
   */
  async post(data) {
    await this.service.post(data)
    this.load()
  }

  /**
   * Partially or completely updates an item
   * @param {Integer} id The item id
   * @param {Object} data The item data
   */
  async update(id, data) {
    await this.service.update(id, data)
    this.load()
  }

  /**
   * Deletes an item
   * @param {Integer} id The item id
   */
  async delete(id) {
    await this.service.delete(id)
    this.load()
  }
}

export default BaseStore