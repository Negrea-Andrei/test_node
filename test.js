let fs = require('fs');

fs.rename('b.json', 'bbbbbbbbbbb.json', err => {
    if(err) {
        return console.log("error")
    }
})

