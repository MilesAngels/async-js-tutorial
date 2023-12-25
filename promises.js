// Example of using a Promise to fetch data from an API

// Fetch 
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise1); // log the state of promise

// When the Promise succeeds or fails, it will output the server response
fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

// Chaining Promises Example
// - We want the response object to be a json file
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise2.then((response) => {
    const jsonPromise = response.json(); // Data response in json format
    jsonPromise.then((data) => {
        console.log(data[0].name); // First object of returned data response
    });
});

// Refactored version of a Promise Chain
const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise3
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].name);
    });

// We can check if the fetch throws an error or not by...
// if (!response.ok) {
//    throw new Error(`HTTP error: ${response.status}`);
// }
// This needs to be caught by... (mote: this is added to the end of the promise chain)
// .catch((error) => {
//    console.error(`Could not get products: ${error}`);
//  });


// Promise All example
/* 
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
*/


// Async Await
async function fetchProducts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
      const data = await response.json();
      console.log(data[0].name);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  fetchProducts();

// Refactored Async Await with try...catch
/*
async function fetchProducts() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  const promise = fetchProducts();
  promise.then((data) => console.log(data[0].name));
*/