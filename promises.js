// Example of using a Promise to fetch data from an API

// Fetch 
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise); // log the state of promise

// When the Promise succeeds or fails, it will output the server response
fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

// 