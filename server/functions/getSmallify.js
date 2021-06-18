const url = require('url')
const getSmallify = (name, url) => {
    _url = new URL(url)
    hostname = _url.hostname
    const link = 'http://smallify.ly/' + name +'/' + hostname  //RandomString
    return link
}
// Math.random().toString(36).substr(2, 5);
module.exports = getSmallify