import { workerData, parentPort } from 'worker_threads';

const data = { ...workerData, course: 'CS572' }
parentPort.postMessage({ data });