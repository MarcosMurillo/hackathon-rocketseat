import axios from 'axios'

class BaseService {
  constructor(resource) {
    this.endpoint = `http://localhost:3001/${resource}`
  }

  async list() {
    try {
      const response = await axios.get(this.endpoint)
      return response.data
    } catch(e) {
      return e
    }
    
  }

  async get(id) {
    try {
      const response = await axios.get(`${this.endpoint}/${id}`)
      return response.data
    } catch(e) {
      return e
    }
    
  }

  async post(body) {
    try {
      const response = await axios.post(this.endpoint, body)
      return response.data
    } catch(e) {
      return e
    }
    
  }

  async update(id, body) {
    try {
      const response = await axios.put(`${this.endpoint}/${id}`, body)
      return response.data
    } catch(e) {
      return e
    }
  }

  async delete(id) {
    try{
      const response = await axios.put(`${this.endpoint}/${id}`)
      return response.data
    } catch(e) {
      return e
    }
  }
}

export default BaseService