import BaseStore from './BaseStore'
import UserService from '../services/UserService'

class UserStore extends BaseStore {
  constructor(rootStore) {
    super(UserService)
  }
}

export default UserStore