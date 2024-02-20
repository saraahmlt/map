function makeStrings(arr) {
    return arr.map(person => {
        if (person.age >= 18) {
            return `${person.name} can go to The Matrix`;
        } else {
            return `${person.name} is under age!!`;
        }
    });
}

// Test de la fonction avec l'exemple donné
console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// Résultat attendu :
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
