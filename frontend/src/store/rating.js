import {observable, computed, action, runInAction} from "mobx"
import BaseStore from "./baseStore"

export default class Rating extends BaseStore {
    @observable iconsSrc

    @action onChoice(askId, answerId) {
        for(let item of this.questions) {
            if (item.id == askId) {
                item.selectScore = answerId
            }
        }
        this.isCanSubmit()
    }

    requiredResponseFields = [
        'description',
        'email',
        'icons_src',
        'id',
        'logo_src',
        'questions',
        'title',
        'type',
        'type_name',
        'user_name',
    ]

    isValidateResponseData(data) {
        for (let item of this.requiredResponseFields) {
            if (!(data.hasOwnProperty(item) &&
                data[item] !== '' &&
                data[item] !== null)) {
                return false
            }
        }
        return true
    }

    initDataFromResponse(data) {
        this.questions = data.questions
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.userName = data.user_name
        this.email = data.email
        this.type = data.type
        this.typeName = data.type_name
        this.logoSrc = data.logo_src
        this.iconsSrc = data.icons_src
    }

    @action isCanSubmit() {
        for(let item of this.questions) {
            if (!(item.hasOwnProperty('selectScore') &&
                Number.isInteger(item.selectScore))) {
                this.isDisabledSubmitBtn = true
                return
            }
        }
        this.isDisabledSubmitBtn = false
    }

    generateAnswerList() {
        let answerList = []
        for(let item of this.questions) {
            answerList.push({
                ask_id: item.id,
                select_score: item.selectScore
            })
        }
        return answerList;
    }
}
