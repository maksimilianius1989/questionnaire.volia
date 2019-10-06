let mainServerUrl = '/api/v1/'

export default function makeRequest (url, options = {}, baseUrl = mainServerUrl) {
    return fetch(baseUrl + url, options)
            .then((response) => {
                if (response.status !== 200) {
                    return response
                            .text()
                            .then((text) => {
                                throw new Error(text)
                            })
                }
                return response.json()
            })
}