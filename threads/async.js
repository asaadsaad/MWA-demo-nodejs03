import { request } from 'https';

const start_time = Date.now()
function requestMe() {
    request('https://www.google.com', res => {
        res.on('data', () => { })
        res.on('end', () => { console.log(Date.now() - start_time) })
    }).end();
}

requestMe()
requestMe()
requestMe()
requestMe()
requestMe()
requestMe()
requestMe()
requestMe()
requestMe()
requestMe()
requestMe()
requestMe()


