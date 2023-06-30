const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active')

// serialized url, the url provided same
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (root domain) mywebsite.com
console.log(myUrl.host);
// host name (w/o port number)
console.log(myUrl.hostname);
// pathname , /hello.html
console.log(myUrl.pathname);
// serialized query , ?id=100&status=active
console.log(myUrl.search);
// paarms object, URLSearchParams { 'id' => '100', 'status' => 'active' }
console.log(myUrl.searchParams);
// add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams); //URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }
// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
// id: 100
// status: active
// abc: 123