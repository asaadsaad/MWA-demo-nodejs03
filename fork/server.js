import { createServer } from 'http';
import { fork } from 'child_process';

const server = createServer();


server.on('request', (req, res) => {
  console.log(`Request received: ${req.url}`)
  //  const sum = longComputation();
  //  return res.end(`Sum is ${sum}`);
  const compute = fork('compute.js');
  compute.send('start');
  compute.on('message', sum => {
    res.end(`Sum is ${sum}`);
  })
});

server.on('request', (req, res) => {
  console.log(`Request received: ${req.url}`)
  const sum = longComputation();
  return res.end(`Sum is ${sum}`);

});
server.listen(3000);
