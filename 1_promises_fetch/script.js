const API_KEY = 'YOU_API_KEY';
const giphyURL = 'http://api.giphy.com/v1/gifs/search';

function setup() {
    // get GIF from API
    let url = new URL(giphyURL);
    let params = { api_key: API_KEY, q: 'gif' }
    url.search = new URLSearchParams(params).toString();
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // display them
            for(let i of data.data) {
                let url = i.images.original.url;
                createImg(url, 'GIF');
            }
        })
        .catch(err => console.warn(err));
}