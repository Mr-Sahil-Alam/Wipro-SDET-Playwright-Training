/*
 The Generic API Wrapper
Scenario: You need a reusable function to fetch data that automatically types the response.
Task: Write a generic function
fetchData<T>(url: string): Promise<T>. It should use the fetch API,
check if the response is okay, and return the JSON parsed as type T.
Test it by creating an Album interface and fetching data from a mock URL
 */
interface Album {
    userId: number;
    id: number;
    title: string;
}

async function fetchData<T>(url: string): Promise<T> {

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error("Failed to fetch data");

    }

    const data = await response.json();

    return data as T;
}


fetchData<Album>(
    "https://jsonplaceholder.typicode.com/albums/1"
)
.then(data => {

    console.log(data);

})
.catch(error => {

    console.log(error);

});