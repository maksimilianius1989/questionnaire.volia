import {observable, computed, action, runInAction} from "mobx"

/**
 * НЕ СОЗДАВАТЬ ОБЬЕКТ ЭТОГО КЛАССА!!
 * Это абстрактный класс для наследования и разширения своего хранилища данных
 */
export default class BaseStore {
    @observable id
    @observable title
    @observable type
    @observable typeName
    @observable description
    @observable userName
    @observable email
    @observable logoSrc
    @observable isDisabledSubmitBtn = true
    @observable isSendingStatus = false
    @observable isSubmitResultSuccess = false
    @observable questions = []

    constructor(rootStore) {
        this.rootStore = rootStore
        this.api = this.rootStore.api.test
        this.storage = this.rootStore.storage
        this.token = this.storage.getItem("ratingToken")

        this.token = "TestToken"
    }

    @action load() {
        return new Promise((resolve, reject) => {
            this.api
                .load(
                    localStorage.getItem('token'),
                    localStorage.getItem('serverHost'),
                    localStorage.getItem('type'),
                    localStorage.getItem('testId'),
                    localStorage.getItem('email'),
                    localStorage.getItem('userName')
                )
                .then((data) => {
                    if (data.hasOwnProperty('error') &&
                        data.error !== '') {
                        resolve({
                            error: data.error
                        })
                        return
                    }

                    if (!this.isValidateResponseData(data)) {
                        resolve({
                            error: "Сервер отвечает не коректно"
                        })
                        return
                    }

                    this.initDataFromResponse(data)

                    resolve(true)
                })
        })
    }

    @action send() {
        return new Promise((resolve, reject) => {
            let email = localStorage.getItem('email')
            let userName = localStorage.getItem('userName')

            var formData  = new FormData();
            let data = {
                email: email,
                user_name: userName,
                answers_list: JSON.stringify(this.generateAnswerList())
            }

            for(var name in data) {
                formData.append(name, data[name]);
            }

            this.isSendingStatus = true

            this.api
                .send(
                    localStorage.getItem('email'),
                    localStorage.getItem('type'),
                    localStorage.getItem('testId'),
                    formData
                )
                .then((data) => {
                    resolve(data)
                })
        })
    }
}
