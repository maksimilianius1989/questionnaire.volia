import React from 'react'
import ReactDom from 'react-dom'
import Home from '~p/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "mobx-react"
import stores from '~s'

stores.rating.load().then(() => {
    ReactDom.render(
        <Provider stores={stores}>
            <Home />
        </Provider>,
        document.querySelector("#app")
    )
})
