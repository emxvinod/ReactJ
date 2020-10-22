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

// const name = john.name, yearsOld = john.age;
const { name, spouse = 'Single', age : yearsOld, address : { city : { name : city } }, emailids : [ , secondEmailId ] } = john;
console.log( name, spouse, yearsOld, city, secondEmailId );

// we can destrcuture an object passed to a function
function ajax( { url, method }, isAsync ) {
    // const { url, method } = config;
    console.log( url, method );
}

ajax({
    url: 'https://example.com',
    method: 'post'
}, true);