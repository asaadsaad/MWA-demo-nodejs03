# CS572 MWA Nodejs 3 Demo  
This repo contains the following examples:  
* `threads` folder contains an example about Node I/O pre-allocated threads and how Node uses them efficiently.
* `fork` folder contains an example about using `child_process` core module to process a CPU intensive work.
* `cluster` folder contains an example about running a Node server and take advantage of `cluster`core module to run the server behind a master process while dedicating forked process on each core of the CPU.
* `worker-threads` folder contains an example about using Node worker threads (work within the same main process).
