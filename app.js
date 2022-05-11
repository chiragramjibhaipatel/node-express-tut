const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (e, s) => {
            if (e) {
                reject(e);
            } else {
                resolve(s);
            }
        });

    })
}

const start = async () => {
    try{
        const file1 = await getText('./content/first.txt');
        console.log(file1);
    } catch (e){
        throw e;
    }
}
start().then(() => console.log("reading done")).catch((e) => console.log("some error", e));
console.log("START")


// getText('./content/first.txt').then(d => console.log(d)).catch(e=>console.log(e));
