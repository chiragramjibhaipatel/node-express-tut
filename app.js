const {readFile} = require('fs').promises
const EventEmitter = require('events');

const customEvent = new EventEmitter();
customEvent.on('fileDone', (content) => console.log("File is red", content));
const start = async () => {
    try{
        const file1 = await readFile('./content/first.txt', 'utf8');
        customEvent.emit('fileDone', file1);
    } catch (e){
        throw e;
    }
}
start().then(() => console.log("reading done")).catch((e) => console.log("some error", e));
console.log("START")

