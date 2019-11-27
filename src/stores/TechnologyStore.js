import BaseStore from './BaseStore'
import TechnologyService from '../services/TechnologyService'

class TechnologyStore extends BaseStore {
  constructor(rootStore) {
    super(TechnologyService)
  }
}

export default TechnologyStore