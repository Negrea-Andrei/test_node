let i = 1;

function printHello() {
    console.log(`Hello ${i}`);
    i++;

    if (i <= 100) {
        setTimeout(printHello, 1000 + i);
    }
}

setTimeout(printHello, 1000);