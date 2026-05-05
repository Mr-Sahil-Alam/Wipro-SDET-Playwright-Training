function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
 
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});
// setTimeout(() => {
//     console.log("Data received");
// }, 5000);
 
// setInterval(() => {
//     console.log("Checking for new data...");
// }, 3000);

// =======================
// Promise Example
// =======================
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

getData()
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));


// =======================
// Fetch API + Data Processing
// =======================
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => data.filter(d => d.id % 2 === 0)) // keep even IDs
  .then(data =>
    data.map(d => ({
      ...d,
      title: "Aaryan " + d.title
    }))
  )
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching data:", error));

  function getData() {
    return new Promise((resolve, reject) => {
        if(2 > 3) {
 
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}
 