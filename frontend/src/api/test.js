import makeRequest from './helpers/makeRequest'

function load(token, email, username, testId) {
    return makeRequest(`test/load?token=${token}&email=${email}&username=${username}&test_id=${testId}&test_type=test`)
}

function send(token, email, username, testId) {
    return makeRequest(`test/send?token=${token}&email=${email}&username=${username}&test_id=${testId}&test_type=test`)
}

export {load, send}