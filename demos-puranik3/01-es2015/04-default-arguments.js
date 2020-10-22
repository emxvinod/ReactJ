function greet( message = 'Hello', name = 'World' ) {
    console.log( `${message} ${name}!` );
}

console.log( undefined );

greet( 'Hello', 'World' );
greet( 'Hello' );
greet( 'Good morning', 'John' );
greet( 'Good morning' );
greet( undefined, 'John' );