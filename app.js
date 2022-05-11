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

getText('./content/first.txt').then(d => console.log(d)).catch(e=>console.log(e));
console.log("START")
