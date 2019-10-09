import ratingStore from './rating'
import testStore from './test'
import * as test from '~/api/test'

class RootStore {
    constructor() {
        this.api = { test }

        this.storage = localStorage
        this.rating = new ratingStore(this)
        this.test = new testStore(this)
    }
}

export default new RootStore()
