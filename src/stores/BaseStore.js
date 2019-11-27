import { extendObservable } from 'mobx'

class BaseStore {
  constructor(service) {
    this.service = service

    extendObservable(this, {
      all: null,
      one: null
    })
  }

 async loadAll() {
    this.all = await this.service.list()
    return this.all
  }

  async loadOne(id) {
    this.one = await this.service.get(id)
    return this.one
  }

  async post(data) {
    await this.service.post(data)
    this.load()
  }

  async update(id, data) {
    await this.service.update(id, data)
    this.load()
  }

  async delete(id) {
    await this.service.delete(id)
    this.load()
  }
}

export default BaseStore