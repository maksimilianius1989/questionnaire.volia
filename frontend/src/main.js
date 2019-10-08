import React from 'react'
import ReactDom from 'react-dom'
import Home from '~p/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "mobx-react"
import stores from '~s'
import {getGETParams, isValidQueries} from '~/helpers'

const getParams = getGETParams()

if (!isValidQueries(getParams)) {
    render({errorInfo: "Не валидный url"})
} else if(getParams.type === 'rating') {
    stores.rating
        .load()
        .then((response) => {
            let params = {}
            if (response.status === 'Error') {
                params = {errorInfo: response.text}
            }
            render(params)
        })
} else if(getParams.type === 'test') {
    // stores.test
    //     .load()
    //     .then((response) => {
    //         render()
    //     })
    render({errorInfo: "Test еще не готов"})
}

function render(params = {}) {
    ReactDom.render(
        <Provider stores={stores}>
            <Home
                errorInfo={params.errorInfo}
            />
        </Provider>,
        document.querySelector("#app")
    )
}