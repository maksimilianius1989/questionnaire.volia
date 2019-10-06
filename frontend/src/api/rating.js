import makeRequest from './helpers/makeRequest'

function load(token, email, username, ratingId) {
    return makeRequest(`rating/load?token=${token}&email=${email}&username=${username}&test_id=${ratingId}&test_type=rating`)
}

function send(token, email, username, ratingId) {
    return makeRequest(`rating/send?token=${token}&email=${email}&username=${username}&test_id=${ratingId}&test_type=rating`)
}

export {load, send}