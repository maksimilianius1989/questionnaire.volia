import {observable, computed, action, runInAction} from "mobx"

export default class {
    @observable id
    @observable title
    @observable description
    @observable author
    @observable logoSrc
    @observable iconsSrc
    @observable isDisabledSubmitBtn = true
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
        this.isCanSubmit()
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
                        this.logoSrc = data.logo_src
                        this.iconsSrc = data.icons_src
                    }
                    resolve(true)
                })
        })
    }

    @action isCanSubmit() {
        for(let item of this.questionnaires) {
            if (!(item.hasOwnProperty('selectAnswerId') &&
                Number.isInteger(item.selectAnswerId))) {
                this.isDisabledSubmitBtn = true
                return
            }
        }
        this.isDisabledSubmitBtn = false
    }

    @action send() {
        let data = {
            email: 'test@test.com',
            username: 'Vasy Pupkin',
            answer_list: [
                {
                    ask_id: 1,
                    answer_id: 21,
                },
                {
                    ask_id: 2,
                    answer_id: 43,
                },
                {
                    ask_id: 3,
                    answer_id: 87,
                },
            ]
        }

        let postOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'SOME_TOKEN'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
        }

        this.api.send(1, postOptions)
    }
}
