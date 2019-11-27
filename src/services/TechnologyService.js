import BaseService from './BaseService'

class CourseService extends BaseService {
  constructor() {
    super('technologies')
  }
}

export default new CourseService()