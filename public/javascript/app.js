function llamar() {
    fetch('./login').then(res => res.json).catch(err => console.log(err));
}