import express, { Request, Response } from 'express';
import WebSocket, { WebSocketServer } from "ws";

const app = express();

app.use(express.json());

const wss = new WebSocketServer({port: 8081});
// change ws to use the same port as the express server for production
// const server = app.listen(8080);
// const wss = new WebSocketServer({ 
//   server,           // Use same HTTP server
//   path: '/ws'       // Different path instead of port
// });

export function server(): void {
  try {
    app.listen(8080, () => console.log('Server started on port 8080'));   

    wss.on('connection', (ws) => {
        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
        
        // debugging code - remove later
        console.log('client connected');
        ws.send('Hello from server');

        ws.on('message', (data) => {
            console.log('Received message:', data.toString());
        });

    wss.on('close', () => console.log('Connection closed'));
    });

 


  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

