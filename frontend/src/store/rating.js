import {observable, computed, action, runInAction} from "mobx"

export default class {
    @observable id
    @observable title
    @observable description
    @observable author
    @observable iconsSrc
    @observable questionnaires = []

    constructor(rootStore) {
        this.rootStore = rootStore
        this.api = this.rootStore.api.rating
        this.storage = this.rootStore.storage
        this.token = this.storage.getItem("ratingToken")

        this.token = "TestToken"
    }

    @action onChoice(askId, answerId) {
        for(let item of this.questionnaires) {
            if (item.id == askId) {
                item.selectAnswerId = answerId
            }
        }
    }

    @action load() {
        return new Promise((resolve, reject) => {
            this.api
                .load(this.token, "test@test.test", "Maksim Bukach", 1)
                .then((data) => {
                    if (data) {
                        this.questionnaires = data.questions
                        this.id = data.id
                        this.title = data.title
                        this.description = data.description
                        this.author = data.author
                        this.iconsSrc = data.icons_src
                    }
                    resolve(true)
                })
        })
    }
}