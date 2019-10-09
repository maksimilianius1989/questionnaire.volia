const requiresQueryParams = [
    'email',
    'server_host',
    'test_id',
    'token',
    'type',
    'user_name',
]

function getGETParams() {
    return window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
            function(p,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        )
}

function isValidQueries(queries) {
    if (queries !== null || queries !== undefined) {
        for (let getParams of requiresQueryParams) {
            if (queries !== undefined) {
                if (!(queries.hasOwnProperty(getParams) &&
                    queries[getParams] !== '')) {
                    return false
                }
            }
        }
        return true
    }
    return false
}

function saveGlobalConfig(params) {
    localStorage.setItem('serverHost', params.server_host)
    localStorage.setItem('token', params.token)
    localStorage.setItem('type', params.type)
    localStorage.setItem('testId', params.test_id)
    localStorage.setItem('email', params.email)
    localStorage.setItem('userName', params.user_name)
}

export {getGETParams, isValidQueries, saveGlobalConfig}