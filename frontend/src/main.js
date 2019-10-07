import React from 'react'
import ReactDom from 'react-dom'
import Rating from '~p/rating'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "mobx-react"
import stores from '~s'

stores.rating.load().then(() => {
    ReactDom.render(
        <Provider stores={stores}>
            <Rating />
        </Provider>,
        document.querySelector("#app")
    )
})
