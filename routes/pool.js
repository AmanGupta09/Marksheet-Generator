var mysql=require("mysql")

var pool=mysql.createPool({

host:'localhost',
port:3306,
user:'root',
password:'YES',
database:'marksheet',
connectionLimit:100


})

module.exports = pool