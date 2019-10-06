import makeRequest from './helpers/makeRequest'

function load(token, email, username, testId) {
    return makeRequest(`test/testId?token=${token}&email=${email}&username=${username}`)
}

function send(token, email, username, testId) {
    return makeRequest(`test/testId?token=${token}&email=${email}&username=${username}`)
}

export {load, send}