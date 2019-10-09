import makeRequest from './helpers/makeRequest'

function load(token, type, testId, email, userName) {
    return makeRequest(`${type}/${testId}?token=${token}&email=${email}&username=${userName}`)
}

function send(token, type, testId, body) {
    let postOptions = {
        method: 'POST',
        headers: {
            'Authorization': token
        },
        body: body
    }

    return makeRequest(`${type}/${testId}`, postOptions)
}

export {load, send}