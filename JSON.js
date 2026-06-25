let text ='{ "employees" : [' +
'{"firstName":"john","lastName":"Doe"},'+
'{"firstName":"Anna","lastName":"Smith"},'+
'{"firstName":"Peter","lastName":"Parker"}]}';

/*ASYNCHRONOUS
    1. promise
    2. asyn/await */

let promise = new Promise((resolve, reject) => {
    let success = false;
    if (success)
        resolve("data loaded");
    else
        reject("error occured");
});

promise.then(result => console.log(result))
.catch(error => console.log(error));

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}
getData();

// store data 
localStorage.setItem("name","gauri");

// retrieve data
var name = localStorage.getItem("name");

// remove data
localStorage.removeItem("name");

//store object
var user = {name:"gauri", age:18};
localStorage.setItem("user",JSON.stringify(user));

// retrieve object
var data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);