var express = require("express"),
    url     = require("url"),
    favicon = require("serve-favicon"),
    path    = require("path");
var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app.use(express.static(path.join(__dirname, 'public')));


app.use('/', function(req, res) {

    var _url = url.parse(req.url);
    _url = _url.pathname.toString().replace('/', '');
    
    if(_url === '') {
        res.render('index');
    } else {
        var obj = {
            unix: null,
            natural: null
        }
        _url = _url.replace(/%20/g, ' ');
        
        if(new Date(_url).getTime() > 0) {
            obj.unix = new Date(_url).getTime();
            obj.natural = new Date(_url).toDateString().slice(4);
        }
        if(new Date(parseInt(_url)).getTime() > 0) {
            obj.unix = new Date(parseInt(_url)).getTime();
            obj.natural = new Date(parseInt(_url)).toDateString().slice(4);
        }
        res.send(obj);
    }
    res.end();
});

app.listen(process.env.PORT);