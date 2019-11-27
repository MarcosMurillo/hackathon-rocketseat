import { extendObservable } from 'mobx'
import BaseStore from './BaseStore'
import UserService from '../services/UserService'

class UserStore extends BaseStore {
  constructor(rootStore) {
    super(UserService)

    extendObservable(this, {
      user: {},
    })

    if (localStorage.loggedUserId) this.autoLogin(localStorage.loggedUserId)
  }

  async autoLogin(id) {
    try {
      const response = await UserService.get(id)
      if (response) {
        this.user = response
        return response

      } else return false
    } catch(e) {
      return false
    }
  }

  async login(email, password) {
    try {
      const response = await UserService.login(email, password)
      if (response) {
        this.user = response[0]
        return response[0]

      } else return false
    } catch(e) {
      return false
    }
  }
}

export default UserStore