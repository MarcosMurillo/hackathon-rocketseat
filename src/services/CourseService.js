import BaseService from './BaseService'

class CourseService extends BaseService {
  constructor() {
    super('courses')
  }
}

export default new CourseService()