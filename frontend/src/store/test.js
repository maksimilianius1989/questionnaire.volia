import {observable, computed, action, runInAction} from "mobx"
import BaseStore from "./baseStore"

export default class Test extends BaseStore{
    @action onChoice(askId, answerId) {
        for(let item of this.questions) {
            if (item.id == askId) {
                item.selectScore = answerId
            }
        }
        this.isCanSubmit()
    }

    requiredResponseFields = [
        'id',
        'type',
        'type_name',
        'email',
        'user_name',
        'title',
        'description',
        'logo_src',
        'questions',
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
        return false
    }

    generateAnswerList() {
        let answerList = []

        return answerList;
    }
}
