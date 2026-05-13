"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
}
fetchData("https://jsonplaceholder.typicode.com/albums/1")
    .then(data => {
    console.log(data);
})
    .catch(error => {
    console.log(error);
});
//# sourceMappingURL=Assignment1.js.map