// ... (rest)

// last argument of a function
function foo( x, y, ...z ) {
    console.log( x );
    console.log( y );
    console.log( z );
}

foo( 1, 2, 3, 4, 5, 6, 7 );


// during array destructuring
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

const [ first, second, ...restOfDays ] = days;
console.log( first, second, restOfDays );

// during object destructuring
const john = {
    age: 32,
    name: 'John',
    address: {
        city: {
            name: 'Bangalore',
            region: 'South'
        },
        pin: 560011
    },
    emailids: [
        'john@gmail.com',
        'john@example.com'
    ]
};

const { name, address : { city, ...restOfJohnAddress }, ...restOfJohnDetails } = john;
console.log( name, city, restOfJohnDetails, restOfJohnAddress );