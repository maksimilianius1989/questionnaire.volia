import React from 'react'
import ReactDom from 'react-dom'
import Home from '~p/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "mobx-react"
import stores from '~s'
import {getGETParams, isValidQueries, saveGlobalConfig} from '~/helpers'

const getParams = getGETParams()

if (!isValidQueries(getParams)) {
    render({error: "Ссылка на тест повреждена!"})
} else {
    saveGlobalConfig(getParams)

    let params = {}
    switch (getParams.type) {
        case 'rating':
            stores.rating
                .load()
                .then((response) => {
                    if (response.error !== '') {
                        params = {error: response.error}
                    }

                    render(params)
                })
            break

        case 'test':
            stores.test
                .load()
                .then((response) => {
                    if (response.error !== '') {
                        params = {error: response.error}
                    }

                    render(params)
                })
            break

        default:
            params = {error: "Не верно указан тип теста"}
            render(params)
    }
}

function render(params = {}) {
    ReactDom.render(
        <Provider stores={stores}>
            <Home error={params.error} />
        </Provider>,
        document.querySelector("#app")
    )
}