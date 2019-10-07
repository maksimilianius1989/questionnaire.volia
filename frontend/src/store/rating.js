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
            if (!(item.hasOwnProperty('selectScore') &&
                Number.isInteger(item.selectScore))) {
                this.isDisabledSubmitBtn = true
                return
            }
        }
        this.isDisabledSubmitBtn = false
    }

    @action send() {
        // let data = {
        //     email: 'test@test.com',
        //     username: 'Vasy Pupkin',
        //     answer_list: this.generateAnswerList()
        // }

        let data = {
            data: 'aaa',
            b: 'bb',
        }

        let postOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'SOME_TOKEN'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            // body: JSON.stringify(data)
            body: {"$post":{"name":"testName","name2":"testNmae2","email":"test@test.com","username":"myusername"},"token":"toekntnetd","testId":"1","testType":"test","email":"test@test.com","userName":"myusername"}
        }

        this.api.send(1, postOptions)
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
