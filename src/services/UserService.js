import BaseService from './BaseService'
import axios from 'axios'

class UserService extends BaseService {
  constructor() {
    super('users')
  }

  async login(email, password) {
    try {
      const response = await axios.get(`${this.endpoint}?email=${email}&password=${password}`)
      if (response) return response.data
      else return false
    } catch(e) {
      return false
    }
  }
}

export default new UserService()