import React from 'react'
import ReactDom from 'react-dom'

import Error from '~p/error404'
import Mark from '~p/mark'
import Test from '~p/test'

import 'bootstrap/dist/css/bootstrap.min.css'

// ReactDom.render(<Error />, document.querySelector("#app"))
// ReactDom.render(<Mark />, document.querySelector("#app"))
ReactDom.render(<Test />, document.querySelector("#app"))
