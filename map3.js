function capitalizeNames(arr) {
    return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

// Test de la fonction avec un exemple
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// Résultat attendu : ["John", "Jacob", "Jingleheimer", "Schmidt"]
