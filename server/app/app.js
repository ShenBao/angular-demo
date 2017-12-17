"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
var app = express();
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.get('/api/stock', function (req, res) {
    var result = stocks;
    var params = req.query;
    if (params.nam) {
        result = result.filter(function (stock) { return stock.name.indexOf(params.name) !== -1; });
    }
    res.json(result);
});
app.get('/api/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) { return stock.id == req.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动,地址是:http://localhost:8000');
});
var subscriptions = new Set();
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    subscriptions.add(websocket);
});
var messageCount = 0;
setInterval(function () {
    subscriptions.forEach(function (ws) {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify({ messageCount: messageCount++ }));
        }
        else {
            subscriptions["delete"](ws);
        }
    });
}, 2000);
var Stock = /** @class */ (function () {
    function Stock(id, name) {
        this.id = id;
        this.name = name;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, "第一个"),
    new Stock(2, "第二个"),
    new Stock(3, "第三个"),
    new Stock(4, "第四个"),
    new Stock(5, "第五个"),
    new Stock(8, "第八个"),
    new Stock(9, "第九个"),
];
