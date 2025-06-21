const callToApi = (search) => {

    let url = `https://api.tvmaze.com/search/shows?q=${search}`
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}

export default callToApi;