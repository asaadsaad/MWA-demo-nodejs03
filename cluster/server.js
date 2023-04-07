import { createServer } from 'http';
const pid = process.pid;

createServer((req, res) => {
  for (let i = 0; i < 1e9; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(1979, () => {
  console.log(`Started process ${pid}`);
});
