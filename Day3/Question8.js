/*
8. Object Extraction** 
You have an array of "Product" objects: [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }]
Use .map() to extract just the titles into a simple array of strings: ['Laptop', 'Mouse'].
*/

let products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];

let titles = products.map(p => p.title);
console.log(titles);