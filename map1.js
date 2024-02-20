function doubleNumbers(numbers) {
    // Utiliser la méthode map pour parcourir le tableau et doubler chaque élément
    return numbers.map(num => num * 2);
  }
  
  // Test de la fonction avec un exemple
  console.log(doubleNumbers([2, 5, 100])); // Affichera : [4, 10, 200]
