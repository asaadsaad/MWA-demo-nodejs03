import { isMaster, fork } from 'cluster';
import { cpus as _cpus } from 'os';

if (isMaster) {
  const cpus = _cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    fork();
  }
} else {
  require('./server');
}
