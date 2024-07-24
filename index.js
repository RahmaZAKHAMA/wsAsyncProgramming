/*
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Usage
/*delay(2000).then(() => {
  console.log("Promise resolved after 2000ms");
});
*/
/*function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step One Completed");
    }, 1000);
  });
}

function stepTwo(message) {
  console.log(message);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step Two Completed");
    }, 2000);
  });
}
*/
/*
stepOne()
  .then(stepTwo)
  .then((result) => {
    console.log(result);
  });

  function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Usage
delay(2000).then(() => {
  console.log('Promise resolved after 2000ms');
}).catch(error => console.log(error));


function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step One Completed");
    }, 1000);
  });
}

function stepTwo(message) {
  console.log(message);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step Two Completed");
    }, 2000);
  });
}
*/





// Example Task
// const promise1 = Promise.resolve('Promise 1 resolved');
// const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));

// Promise.race([promise1, promise2, promise3])
//   .then(values => {
//     console.log(values);
//   });
// Promise.all([promise1, promise2, promise3]).then(values =>{ console.log(values);});


/*async function doSomethingAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step One Completed");
    }, 1000);
  });
}
async function doSomethingElseAsync(message) {
  console.log(message);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`doSomethingElseAsync`);
    }, 1000);
  });
}

doSomethingAsync()
.then(doSomethingElseAsync)
.then((result)=> console.log(result))

*/

// doSomethingAsync()
//   .then((result) => {
//     return doSomethingElseAsync(result);
//   })
//   .then((finalResult) => {
//     console.log("Final result:", finalResult);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// async function concurrentRequests() {
//   console.log("Fetching data from both APIs concurrently...");
//   const [response1, response2] = await Promise.all([
//     doSomethingAsync(),
//     doSomethingElseAsync(),
//   ]);
//   console.log("Combined results:", {
//     response1: response1,
//     response2: response2,
//   });
// }

// concurrentRequests();


// let url = "https://fakestoreapi.com/products";
/*
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let filteredData = data.filter((el) => el.price < 100);
    console.log(filteredData);
  })
  .catch((error) => console.log(error));
  */

  /*async function doSomethingAsync() {
    console.log("Fetching data from both APIs concurrently...");
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            data.map((el) => (el.price = Number((el.price + 10).toFixed(2))));
            console.log(data);
             resolve("Price Update Completed");
          })
          .catch((error) => console.log(error));
       
      }, 1000);
    });
  }
  doSomethingAsync().then((result) => console.log(result));

*/
///Task 1
async function doSomethingAsync(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, 1000);
  });
}
/*function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}*/

let tab=['hello', 'world'];
async function iterateWithAsyncAwait(tab){
  for(let i=0; i<tab.length; i++){
    let result = await doSomethingAsync(tab[i]);
    console.log(result);
  }
}
//iterateWithAsyncAwait(tab);
////Task 2
 let url = "https://fakestoreapi.com/products";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
        console.log(data);
  })
  .catch((error) => console.log(error));
async function awaitCall(){
const res=await fetch(url);
}
//awaitCall()
//Task 3

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function asyncFunction1() {
  await delay(1000); // Wait for 1 second
  console.log("Async Function 1 executed");
}

async function asyncFunction2() {
  await delay(1000); // Wait for 1 second
  console.log("Async Function 2 executed");
}

async function asyncFunction3() {
  await delay(1000); // Wait for 1 second
  console.log("Async Function 3 executed");
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}
//chainedAsyncFunctions();
//Task 4
async function concurrentRequests() {
  try {
  
    const [result1, result2] = await Promise.all([
      fetch("https://api.example.com/endpoint1"),
      fetch("https://api.example.com/endpoint2"),
    ]);

  
    const data1 = await result1.json();
    const data2 = await result2.json();

   
    console.log("Result from API 1:", data1);
    console.log("Result from API 2:", data2);

  
    return { data1, data2 };
  } catch (error) {
    console.error("Error during concurrent requests:", error);
    throw error; // Re-throw the error to propagate it
  }
}

concurrentRequests()
  .then((combinedResults) => {
    console.log("Combined results:", combinedResults);
  })
  .catch((error) => {
    console.error("Error in main function:", error);
  });
  // Task 5
 async function parallelCalls(urls) {
   try {
     // Create an array of promises for each fetch request
     const promises = urls.map((url) => fetch(url));

     // Execute all promises concurrently using Promise.all
     const responses = await Promise.all(promises);

     // Assuming the API returns JSON, parse the responses
     const responseData = await Promise.all(
       responses.map((response) => response.json())
     );

     // Log the responses
     console.log("Responses from all URLs:", responseData);

     // You can return the responseData array if needed
     return responseData;
   } catch (error) {
     console.error("Error during parallel calls:", error);
     throw error; // Re-throw the error to propagate it
   }
 }

 // Example usage:
 const urls = [
   "https://api.example.com/data1",
   "https://api.example.com/data2",
   "https://api.example.com/data3",
 ];

 // Call parallelCalls with the array of URLs
 parallelCalls(urls)
   .then((responseData) => {
     console.log("All responses fetched successfully:", responseData);
   })
   .catch((error) => {
     console.error("Error in main function:", error);
   });

