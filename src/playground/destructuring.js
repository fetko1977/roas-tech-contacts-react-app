//
// Object destruction
//

// const person = {
//     name: 'Svetoslav',
//     age: 42,
//     location: {
//         city: 'Ruse',
//         temp: 32
//     }
// }

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } =book.publisher

// console.log(publisherName);

//
// Array Destructing
//

// const address = ['Karlovo street No22', , '7000', 'Bulgaria'];

// const [, city = 'Ruse', , country] = address;

// console.log(`You are in ${city} - ${country}`);

const item = ['Coffee (ice)', '$3.00', '$3.50', '$3.75'];

const [product,,mediumPrice] = item;

console.log(`A medium ${product} costs ${mediumPrice}`);