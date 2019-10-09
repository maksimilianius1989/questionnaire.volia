import makeRequest from './helpers/makeRequest'

function load(token, serverHost, type, testId, email, userName) {
    return makeRequest(`${type}/${testId}?token=${token}&server_host=${serverHost}&email=${email}&user_name=${userName}`)
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