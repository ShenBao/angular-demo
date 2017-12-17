
import * as express from "express";
import * as path from "path";
import {Server} from "ws";

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'client')))

app.get('/api/stock', (req, res) => {
    let result = stocks;
    let params = req.query;

    if(params.nam){
        result = result.filter(stock => stock.name.indexOf(params.name) !== -1);
    }

    res.json(result);
});

app.get('/api/stock/:id', (req, res) => {
    res.json(stocks.find(stock => stock.id == req.params.id));
});

const server = app.listen(8086, 'localhost', () => {
    console.log('服务器已启动,地址是:http://localhost:8086');
});

var subscriptions = new Set<any>();

const wsServer = new Server({port: 8085});
wsServer.on("connection", websocket => {
    subscriptions.add(websocket);
});

var messageCount = 0;

setInterval(() => {
    subscriptions.forEach(ws => {
        if(ws.readyState === 1){
            ws.send(JSON.stringify({messageCount: messageCount++}));
        }else{
            subscriptions.delete(ws);
        }
    })
}, 2000);

export class Stock {
    constructor(public id: number,
                public name: string,
    ) {

    }
}

const stocks: Stock[] = [
    new Stock(1, "第一个"),
    new Stock(2, "第二个"),
    new Stock(3, "第三个"),
    new Stock(4, "第四个"),
    new Stock(5, "第五个"),
    new Stock(8, "第八个"),
    new Stock(9, "第九个"),
];