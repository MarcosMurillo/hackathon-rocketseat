import BaseStore from './BaseStore'
import PostService from '../services/PostService'

class PostStore extends BaseStore {
  constructor(rootStore) {
    super(PostService)
  }
}

export default PostStore