// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const nameArray = [];
    arr.forEach((thing) => {
        nameArray.push(thing.name);
    });
    return nameArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reverseTypeArray = [];
    arr.forEach((thing) => {
        reverseTypeArray.push(thing.type);
    })
    return reverseTypeArray.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishPets = [];
    arr.forEach((thing) => {
        spanishPets.push(
            {
            'nombre' : thing['name'], 
            'tipo' : thing['type']
            }
        );
    })
    return spanishPets;
}