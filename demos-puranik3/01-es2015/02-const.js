// scope-wise const variables follow same scope rules as let variables
const x = 1;

// x = 2; // error

// object is still mutable
const john = {
    name: 'John',
    age: 32
};

// error - we cannot re-assign
// john = {
//     name: 'Jonathan',
//     age: 32
// };

john.name = 'Jonathan';
john.spouse = 'Jane';

console.log( john );

const numbers = [ 1, 2, 3, 4 ];
numbers.push( 5 );

console.log( numbers );