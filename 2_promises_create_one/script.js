function setup() {
    noCanvas();
    delay(1000)
        .then(() => createP('hello world'))
        .catch(err => console.warn(err));
}

function delay(timeout) {
    return new Promise((resolve, reject) => {
        if(isNaN(timeout)) {
            reject(new Error('delay requires a valid number'));
        }
        setTimeout(resolve, timeout);
    });
}

function helloWorld() {

}