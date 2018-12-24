var userList=[];

module.exports = {
    userLogin: (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        if(username == password && username == "admin"){
            res.send(true);
        }else{
            res.send(true);
        }
    },
    userRegistration: (req, res) => {
        var user = {};
        user["username"] = req.body.username;
        user["password"] = req.body.password;
        userList.push(user);
        res.send("registure succeed");
    }
}