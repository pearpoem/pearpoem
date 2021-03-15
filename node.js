const express = require("express")
const PORT = process.env.PORT
const app = express()
const Upbit = require('./upbit_lib')
const timeout = ms => new Promise(res => setTimeout(res, ms))
const upbit = new Upbit('1', '1')

let notiJson;

app.get("/", (req, res) => {
    start()
    res.send(notiJson)
    })
app.listen(PORT)



async function start() {
    notiJson  = await upbit.proxy_test();
}