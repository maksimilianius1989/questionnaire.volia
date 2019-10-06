import {observable, computed, action} from "mobx"

export default class {
    @observable questionnairesArray = []

    constructor(rootStore) {
        this.rootStore = rootStore
        this.api = this.rootStore.api.rating
        this.storage = this.rootStore.storage
        this.token = this.storage.getItem("ratingToken")
    }
}