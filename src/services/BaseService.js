import axios from 'axios'

class BaseService {
  constructor(resource) {
    this.endpoint = `http://localhost:3001/${resource}`
  }

  /** Return a list with all items */
  async list() {
    try {
      const response = await axios.get(this.endpoint)
      return response.data
    } catch(e) {
      return e
    }
    
  }

  /** 
   * Return a single item by id 
   * @param {Integer} id The item id
   */
  async get(id) {
    try {
      const response = await axios.get(`${this.endpoint}/${id}`)
      return response.data
    } catch(e) {
      return e
    }
    
  }

  /** 
   * Create a new item 
   * @param {Object} data The item data
   */
  async post(data) {
    try {
      const response = await axios.post(this.endpoint, data)
      return response.data
    } catch(e) {
      return e
    }
    
  }

  /**
   * Partially or completely updates an item
   * @param {Integer} id The item id
   * @param {Object} data The item data
   */
  async update(id, data) {
    try {
      const response = await axios.put(`${this.endpoint}/${id}`, data)
      return response.data
    } catch(e) {
      return e
    }
  }

  /**
   * Deletes an item
   * @param {Integer} id The item id
   */
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