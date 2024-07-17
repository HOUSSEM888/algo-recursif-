function estBissextile(annee) {
    if (annee % 4 === 0) {
        if (annee % 100 === 0) {
            if (annee % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Exemple d'utilisation
let annee = 2024;
if (estBissextile(annee)) {
    console.log(`L'année ${annee} est bissextile.`);
} else {
    console.log(`L'année ${annee} n'est pas bissextile.`);
}




// Tarification des billets 

function calculerPrixBillet() {
    let age = parseInt(prompt("Quel est votre âge ?"));
    let prix;

    if (age <= 12) {
        prix = 10;
        console.log(`Vous êtes un enfant de ${age} ans. Le prix du billet est de ${prix} $.`);
    } else if (age >= 13 && age <= 17) {
        prix = 15;
        console.log(`Vous êtes un adolescent de ${age} ans. Le prix du billet est de ${prix} $.`);
    } else if (age >= 18) {
        prix = 20;
        console.log(`Vous êtes un adulte de ${age} ans. Le prix du billet est de ${prix} $.`);
    } else {
        console.log("Veuillez entrer un âge valide.");
    }
}

// Appel de la fonction pour tester
calculerPrixBillet();




//Conseiller en vêtements et météo 

function conseillerVetements() {
    //parseFloat(prompt("Quelle est la température actuelle en degrés Celsius ?")) : Cette ligne demande à l'utilisateur la température et convertit la réponse en nombre à virgule flottante avec parseFloat().
    let temperature = parseFloat(prompt("Quelle est la température actuelle en degrés Celsius ?"));
    let pluie = prompt("Est-ce qu'il pleut actuellement ? (oui/non)").toLowerCase();


    // nan vérifie si la température entrée n'est pas un nombre valide. Si tel est le cas, le programme affiche un message d'erreur.
    if (isNaN(temperature)) {
        console.log("Veuillez entrer une température valide en chiffres.");
        return;
    }

    if (pluie !== "oui" && pluie !== "non") {
        console.log("Veuillez répondre par 'oui' ou 'non' pour indiquer s'il pleut.");
        return;
    }

    if (temperature >= 25) {
        if (pluie === "oui") {
            console.log("Il fait chaud et il pleut. Vous devriez porter un imperméable léger et des vêtements légers.");
        } else {
            console.log("Il fait chaud et il ne pleut pas. Optez pour des vêtements légers et confortables.");
        }
    } else if (temperature >= 15) {
        if (pluie === "oui") {
            console.log("Il fait frais et il pleut. Un manteau imperméable avec des vêtements chauds en dessous serait idéal.");
        } else {
            console.log("Il fait frais mais il ne pleut pas. Pensez à une veste légère ou un pull avec un pantalon.");
        }
    } else {
        if (pluie === "oui") {
            console.log("Il fait froid et il pleut. Portez un manteau chaud et imperméable, ainsi que des vêtements chauds en dessous.");
        } else {
            console.log("Il fait froid mais il ne pleut pas. Habillez-vous chaudement avec un manteau épais, un pull et un pantalon.");
        }
    }
}

// Appel de la fonction pour tester
conseillerVetements();




//Suite de Fibonacci

function fibonacci(n) {
    // Cas de base
    if (n <= 1) {
        return n;
    }

    // Appel récursif pour calculer Fibonacci(n-1) + Fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemple d'utilisation
var  n = 7; // Changer ici pour obtenir un nombre spécifique de la suite de Fibonacci
console.log(`Le ${n}-ième nombre de Fibonacci est : ${fibonacci(n)}`);


//Vérificateur de palindrome

function estPalindrome(chaine) {
    // Convertir la chaîne en minuscules et enlever les espaces et la ponctuation
    let chaineTraitee = chaine.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Fonction récursive interne pour vérifier si la chaîne est un palindrome
    function estPalindromeRecursive(s, left, right) {
        // Cas de base
        if (left >= right) {
            return true;
        }

        // Vérifier les caractères aux extrémités
        if (s.charAt(left) !== s.charAt(right)) {
            return false;
        }

        // Appel récursif avec les indices ajustés
        return estPalindromeRecursive(s, left + 1, right - 1);
    }

    // Appeler la fonction récursive avec les indices initiaux
    return estPalindromeRecursive(chaineTraitee, 0, chaineTraitee.length - 1);
}

// Exemples d'utilisation
console.log(estPalindrome("A man, a plan, a canal, Panama")); // true
console.log(estPalindrome("racecar")); // true
console.log(estPalindrome("hello")); // false
console.log(estPalindrome("Was it a car or a cat I saw?")); // true
console.log(estPalindrome("")); // true (chaîne vide est considérée comme palindrome)


//fonction puissance 
function puissance(base, exponent) {
    // Cas de base : exponent est égal à 0
    if (exponent === 0) {
        return 1;
    }

    // Cas récursif : exponent est positif
    if (exponent > 0) {
        return base * puissance(base, exponent - 1);
    }

    // Cas récursif : exponent est négatif (calcul de la puissance inverse)
    if (exponent < 0) {
        return 1 / (base * puissance(base, -exponent - 1));
    }
}

// Exemples d'utilisation
console.log(puissance(2, 3)); // 2^3 = 8
console.log(puissance(5, 0)); // 5^0 = 1
console.log(puissance(10, -2)); // 10^(-2) = 0.01
console.log(puissance(-3, 4)); // (-3)^4 = 81
