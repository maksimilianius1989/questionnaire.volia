import ratingStore from './rating'
import * as rating from '~/api/rating'

class RootStore {
    constructor() {
        this.api = {
            rating
        }

        this.storage = localStorage
        this.rating = new ratingStore(this)
    }
}

export default new RootStore()
