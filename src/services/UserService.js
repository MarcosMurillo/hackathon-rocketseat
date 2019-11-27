import BaseService from './BaseService'

class CourseService extends BaseService {
  constructor() {
    super('users')
  }
}

export default new CourseService()