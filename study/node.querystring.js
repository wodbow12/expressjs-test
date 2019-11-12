var url = require('url');
var querystring = require('querystring');

var parserObject = url.parse('https://vo.la/api/get_url_info?key=c5tqKQCtzhvm&short=sdfdsfdsfsf');
console.log(querystring.parse(parserObject.query));