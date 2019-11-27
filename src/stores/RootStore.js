import CourseStore from './CourseStore'
import UserStore from './UserStore'
import PostStore from './PostStore'
import TechnologyStore from './TechnologyStore'

class RootStore {
  constructor() {
    this.courseStore = new CourseStore(this)
    this.userStore = new UserStore(this)
    this.postStore = new PostStore(this)
    this.technologyStore = new TechnologyStore(this)
  }
}

export default new RootStore()