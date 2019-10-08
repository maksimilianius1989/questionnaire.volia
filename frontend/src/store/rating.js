import {observable, computed, action, runInAction} from "mobx"

export default class {
    @observable id
    @observable title
    @observable type
    @observable description
    @observable userName
    @observable email
    @observable logoSrc
    @observable iconsSrc
    @observable isDisabledSubmitBtn = true
    @observable isSendingStatus = false
    @observable isSubmitResultSuccess = false
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
                item.selectScore = answerId
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
                        this.userName = data.user_name
                        this.email = data.email
                        this.type = data.type
                        this.logoSrc = data.logo_src
                        this.iconsSrc = data.icons_src
                    }
                    resolve(true)
                })
        })
    }

    @action isCanSubmit() {
        for(let item of this.questionnaires) {
            if (!(item.hasOwnProperty('selectScore') &&
                Number.isInteger(item.selectScore))) {
                this.isDisabledSubmitBtn = true
                return
            }
        }
        this.isDisabledSubmitBtn = false
    }

    @action send() {
        return new Promise((resolve, reject) => {
            var formData  = new FormData();
            let data = {
                email: 'test@test.com',
                user_name: 'Ivanov Taras',
                answers_list: JSON.stringify(this.generateAnswerList())
            }

            for(var name in data) {
                formData.append(name, data[name]);
            }

            let postOptions = {
                method: 'POST',
                headers: {
                    'Authorization': 'SOME_TOKEN'
                },
                body: formData
            }

            this.isSendingStatus = true

            this.api
                .send(1, postOptions)
                .then((data) => {
                    resolve(data)
                })
        })
    }

    generateAnswerList() {
        let answerList = []
        for(let item of this.questionnaires) {
            answerList.push({
                ask_id: item.id,
                select_score: item.selectScore
            })
        }
        return answerList;
    }
}
