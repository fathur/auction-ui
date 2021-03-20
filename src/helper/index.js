

export const apiUrl = (path = null) => {
    let url = process.env.API_URL + '/' + path
    return url.replace(/([^:]\/)\/+/g, "$1");
}