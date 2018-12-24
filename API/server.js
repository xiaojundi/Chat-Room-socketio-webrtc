var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const morgan = require('morgan');
//Routing
var auth = require('./routes/auth');
var getMessage = require('./routes/getMessageList');
var userList = [];
var messageList = [];
var base_url = "http://192.168.1.30:8100";
const bodyParser = require('body-parser');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));
//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});


app.use('/api/auth', auth);
app.use('/api/getMessage', getMessage);
// app.get('/', function (req, res) {
//     var myJsonString = JSON.stringify({"messageList": messageList});
//     res.send(myJsonString);
// });

// app.post('/status', function (req, res) {
//     console.log(req.body);
//     res.send(true);
// });
var i=0;
io.origins([base_url]);
var room = "";
var roomList = [];

app.post('/roomNumber',function(req, res){
    room = req.body.roomname;
    if(room!=="" && roomList.indexOf(room)==-1){
        roomList.push(room);
    }
    res.send(true);
});

io.on('connection', (socket) => {
    
    socket.join(room);

    socket.on('disconnect', function () {
        console.log('discounnect');
        io.to(room).emit('users-changed', { user: socket.nickname, event: 'left' });
    });

    socket.on('set-nickname', (nickname) => {
        socket.nickname = nickname;
        userList.push(nickname);
        io.to(room).emit('users-changed', { user: nickname, event: 'joined' });
    });

    socket.on('add-message', (message) => {
        // messageList.push({ text: message.text, from: socket.nickname, created: new Date() });
        io.to(message.roomname).emit('message', { text: message.text, from: socket.nickname, created: new Date() });
    });

    socket.on('check-nickname', (nickname) => {
        userList = [];
        if (userList.indexOf(nickname) === -1) {
            io.emit('name-status', { status: true });
        } else {
            io.emit('name-status', { status: false });
        }
    });
});

var port = process.env.PORT || 3001;

http.listen(port, function () {
    console.log('listening in http://192.168.1.30:' + port);
});