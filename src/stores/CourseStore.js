import BaseStore from './BaseStore'
import CourseService from '../services/CourseService'

class CourseStore extends BaseStore {
  constructor(rootStore) {
    super(CourseService)
  }
}

export default CourseStore