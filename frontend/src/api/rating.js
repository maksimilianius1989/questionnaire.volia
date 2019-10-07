import makeRequest from './helpers/makeRequest'

function load(token, email, username, ratingId) {
    return makeRequest(`rating/${ratingId}?token=${token}&email=${email}&username=${username}`)
}

function send(ratingId, options) {
    return makeRequest(`rating/${ratingId}`, options)
}

export {load, send}