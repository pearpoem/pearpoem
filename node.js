const express = require("express")
//const PORT = process.env.PORT
const app = express()
const Upbit = require('./upbit_lib')
const timeout = ms => new Promise(res => setTimeout(res, ms))
const upbit = new Upbit('1', '1')

let notiJson;
let initStart = 0;

app.set('port', (process.env.PORT || 5000));
app.get("/", (req, res) => {
    
    //res.send(notiJson)
    //res.send({ hello: "world" });
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.write(notiJson); 
    //res.end();


    })
app.listen(app.get('port'), function () {
        console.log('App is running, server is listening on port ', app.get('port'));
        start()
      });

async function start() {
    notiJson  = await upbit.notice_info();

    if(notiJson.success){
        initStart++;
            console.log('루프수 : '+initStart)
                setTimeout( function() {
                    //console.log('timer test');
                    start()
                }, 15000);
    }else{
        let today = new Date();   
        console.log('공지갱신실패 (갱신실패로 5분 후 재시도) : '+today);
        setTimeout( function() {
            start()
        }, 300000);
    }
}