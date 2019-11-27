import axios from 'axios'

class BaseService {
  constructor(resource) {
    this.endpoint = `http://localhost:3001/${resource}`
  }

  async list() {
    const response = await axios.get(this.endpoint)
    return response.data
  }

  async get(id) {
    const response = await axios.get(`${this.endpoint}/${id}`)
    return response.data
  }

  async post(body) {
    const response = await axios.post(this.endpoint, body)
    return response.data
  }

  async update(id, body) {
    const response = await axios.put(`${this.endpoint}/${id}`, body)
    return response.data
  }

  async delete(id) {
    const response = await axios.put(`${this.endpoint}/${id}`)
    return response.data
  }
}

export default BaseService