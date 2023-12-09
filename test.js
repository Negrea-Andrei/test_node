const myURL = new URL('/foo', 'https://example.org/');

myURL.password = "123"
myURL.username = "ala"

if(myURL.password === "123" && myURL.username === "ala") {
    console.log("Welcome")
    console.log(myURL)
}
else {
    console.log('Error')
    console.log(myURL)
}