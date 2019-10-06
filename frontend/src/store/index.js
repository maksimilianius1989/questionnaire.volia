import rating from './rating'

class RootStore {
    constructor() {
        this.api = {
            rating
        }

        this.storage = localStorage
        this.rating = new rating(this)
    }
}

export default new RootStore()