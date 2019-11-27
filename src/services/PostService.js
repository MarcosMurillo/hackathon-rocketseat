import BaseService from './BaseService'

class CourseService extends BaseService {
  constructor() {
    super('posts')
  }
}

export default new CourseService()