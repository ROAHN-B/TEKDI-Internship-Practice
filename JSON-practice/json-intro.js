// This is a JSON sample
const info={          // JSON object
    "name":"John Doe",
    "Age":27,
    "Nationality":"American"

} // JSON stores in key value pair


// JSON to Javascript
const text = '{"name":"John", "age":30, "city":"New York"}';
const person = JSON.parse(text)  

//Converting JavaScript to JSON
const person1 = {
  name: "John",
  age: 30,
  city: "New York"
};

const text1  = JSON.stringify(person1)

//JSON sytax
/* The value can be:

An Object
An Array
A String
A Number
A Boolean
or null*/

//JSON string
const Json_string = '{"Name":"Karan","Age":25}'
// JSON supports 6 datatypes = String, number,boolean,Null,object,array

//JSON array literal
const cars =  '["Ford", "BMW", "Fiat"]'

//Different data types of JSON
/*
Type	Description
String	- A sequence of characters enclosed in double quotes
Number	- An integer or floating-point number
Boolean	- The literal values true or false
Null	- The literal value null to indicate the absence of a value
Array	- An list of values enclosed in square brackets
Object	- A collection of key/value pairs enclosed in curly braces
Property values can be objects. */

const example={
"employee":{"name":"John", "age":30, "city":"New York"}
}

//Nested JSON
const Nested = {
  "name": "John",
  "age": 30,
  "address": {
    "city": "New York",
    "country": "USA"
  },
  "hobbies": [
    "Reading",
    "Cycling",
    "Photography"
  ]
}

//parsing JSON array
const text2 = '["Ford","Volvo","BMW"]';
const cars1= JSON.parse(text2);

//Reviver function - callback function use to transform parsed data
const text3 = '{"name":"John","age":"30"}';
const person2 = JSON.parse(text, function(key, value) {
// Convert the age to a number
  if (key == "age") {
    return Number(value);
  }
// Return other keys/values unchanged
  return value;
});

typeof person.age; // Number



// Try and Catch is used in JSON for invalid JSON format
const text4 = "{name:'John'}";

try {
  const person = JSON.parse(text);
}
catch(err) {
  myDisplayer(err);
}


// We can sture functions as values in JSON 
const tex4 = '{"name":"John", "age":"function () {return 30;}';

// fetch() is used to fetch the json values from .json file
async function loadJSON() {
  const response = await fetch("customer.json");
  const customer = await response.json();

  myDisplayer(customer.name);
}

loadJSON();

//using try and catch
async function loadJSON1(){
    const response = await fetch("customer.json")
    try{
        if(!response.ok){
            throw new Error("HTTP error", response.status);
            
        }
    }
    catch(err){
        console.log("failed to fetch the file",err)
    }
}

// we can fetch multiple files
async function loadData() {
  const [customerResponse, productsResponse, newsResponse] = await Promise.all([
    fetch("customer.json"),
    fetch("products.json")
  ]);
  const customer = await customerResponse.json();
  const products = await productsResponse.json();
  myDisplayer("Custome name: " + customer.name);
  myDisplayer(products.length + " products");
}

loadData();








// using fetch() and POST method we can send data in JSON format 
const person3 = {
    name: "John",
    age: 30
}

const response = await fetch("/api/person",{
    method:"POST",
    headers:{
         "Content-Type": "application/json"
    },
    bosy:JSON.stringify(person)
});