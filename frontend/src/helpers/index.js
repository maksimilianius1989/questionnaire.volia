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
                if (!queries.hasOwnProperty(getParams)) {
                    return false
                }
            }
        }
        return true
    }
    return false
}

export {getGETParams, isValidQueries}