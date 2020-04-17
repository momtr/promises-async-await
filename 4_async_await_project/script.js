const API_KEY = 'YOU_API_KEY';
const giphyURL = 'http://api.giphy.com/v1/gifs/search';

function setup() {
    noCanvas();
    srcList()
        .then(data => {
            for(let i of data) {
                createImg(i, 'GIF');
            }
        })
        .catch(err => console.warn(err));
}

async function srcList() {
    // get GIF from API
    let url = new URL(giphyURL);
    let params = { api_key: API_KEY, q: 'deep dream' }
    url.search = new URLSearchParams(params).toString();
    let response = await fetch(url);
    let json = await response.json();
    let src = [];
    for(let i of json.data) {
        src.push(i.images.original.url);
    }
    return src;
}