/*
Mapped Types with Key Remapping
Scenario: You have a data model and need to generate a type for an API response that "prefixes"
all the keys.
Task:Define an interface Car { make: string; model: string; }.
Create a mapped type ApiResponse<T> that iterates through keys of T and renames them to be
uppercase and prefixed with DATA_ (e.g., make becomes DATA_MAKE).

*/
interface Car {

    make: string;

    model: string;

}


type ApiResponse<T> = {

    [P in keyof T as `DATA_${Uppercase<string & P>}`]: T[P];

};


type CarApi = ApiResponse<Car>;


const carData: CarApi = {

    DATA_MAKE: "BMW",

    DATA_MODEL: "X5"

};

console.log(carData);