// Iteration 1: Names and Input
let hacker1 = "Maria";

console.log("The driver's name is " + hacker1);

let hacker2 = "Mariana";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops ---------------------------------------
// 3.1
let spaced_name = "";

for (i = 0; i < hacker1.length; i++) {
  if (spaced_name === "") {
    spaced_name = hacker1[i].toUpperCase();
  } else {
    spaced_name += " " + hacker1[i].toUpperCase();
  }
}

console.log(spaced_name);

//3.2
let reverse_name = "";
for (i = 0; i < hacker2.length; i++) {
  reverse_name = hacker2[i] + reverse_name;
}

console.log(reverse_name);

//3.2 other solution
let reverse_name2 = "";
for (i = hacker2.length; i >= 0; i--) {
  reverse_name2 = reverse_name2 + hacker2[i];
}

console.log(reverse_name);
//3.3
for (i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else if (i == hacker1.length - 1 || i == hacker2.length) {
    if (hacker1.length < hacker2.length) {
      console.log("The driver's name goes first.");
      break;
    } else if (hacker1.length > hacker2.length) {
      console.log("Yo, the navigator goes first definitely.");
      break;
    } else {
      console.log("What?! You both have the same name?");
      break;
    }
  }
}

//3.3 other solution

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// 3.3 other solution
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// BONUS 1 ------------------------------------
let lorem_impsum = "Et,et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu diam et lacus tempus ullamcorper. Nulla facilisi. Mauris hendrerit interdum sem non bibendum. Phasellus et accumsan turpis. Vivamus quis bibendum nisl. Cras iaculis orci eu velit auctor, rhoncus semper ligula elementum. Vestibulum metus est, dignissim id leo sit amet, maximus egestas quam. Quisque commodo, lacus nec posuere ultricies, quam tortor mollis quam, nec volutpat justo quam non elit. Integer at tellus porta mauris luctus rutrum et vitae ante. Curabitur efficitur ornare neque et porta. Maecenas ultricies varius purus vel iaculis. Fusce rutrum quam at dolor fringilla, eu placerat mi tristique. Nam tincidunt faucibus mauris quis egestas. Vivamus feugiat odio est, vitae convallis tellus condimentum hendrerit. Nullam semper justo erat, euismod feugiat leo efficitur nec. Vivamus ligula ex, tempus eleifend tellus ac, fringilla tincidunt odio. Phasellus condimentum ligula at sapien porttitor, sed venenatis orci vestibulum. Aliquam vel vehicula velit. Nam non quam vestibulum, tempor lacus cursus, aliquet justo. Etiam efficitur fermentum velit, sed placerat justo viverra sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec sem vitae sem facilisis fermentum quis non libero. Maecenas quis metus lobortis, ornare nisl nec, placerat dui. Pellentesque a nunc in sem vehicula pharetra. Morbi dignissim leo vitae mauris rhoncus consectetur. Nullam pharetra pulvinar tristique. Aliquam molestie, est nec finibus tincidunt, diam odio placerat orci, sed congue nisl quam a nunc. Maecenas egestas, mauris non viverra tristique, lorem lorem sollicitudin libero, quis vehicula lacus dolor at nibh. Donec eu mauris sapien. Proin bibendum a urna ac eleifend. Aenean et justo nec arcu ultrices accumsan. Suspendisse molestie placerat nisi ut malesuada. Phasellus quis interdum ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce interdum justo sit amet fringilla scelerisque.";

lorem_impsum = lorem_impsum.toLowerCase();


//Make your program count the number of words in the string.
function countWords(lorem_impsum) {
let count_words = lorem_impsum.split(" ").length;
console.log(count_words);
}
countWords(lorem_impsum);

//Make your program count the number of times the Latin word et appears.
// loop solution
let countEt = 0;
for (i=0;i<lorem_impsum.length-3;i++) {
  if (lorem_impsum.substring(i,i+4)=== ' et ') {
    countEt += 1;
  }
}

console.log(countEt);

//Make your program count the number of times the Latin word et appears.
//(match usando expressão regular, verificaria inclusive o caso de estar seguida de alguma pontuação)
console.log(lorem_impsum.match(/\b[W]?et[W]?\b/g).length);

//Make your program count the number of times the Latin word et appears.
//other solution (usando split e depois contando quantas vezes o texto foi dividido)
console.log(lorem_impsum.split(" et ").length - 1);






// BONUS 2 ------------------------------------
let phraseToCheck = "a";

phraseToCheck = phraseToCheck.replace(/[\W]/g, "").toUpperCase();
console.log(phraseToCheck);
i = 0;
while (i < phraseToCheck.length - 1 - i) {
  if (phraseToCheck[i] !== phraseToCheck[phraseToCheck.length - 1 - i]) {
    console.log(phraseToCheck[i]);
    console.log(phraseToCheck[phraseToCheck.length - 1 - i]);

    console.log("this phrase is not a Palindrome");
    break;
  } else if (i = phraseToCheck.length - 2 - i) {
    console.log("this phrase is a Palindrome");
  }
  i++;
}




//BONUS 3 HAHAHAHA MEUS ESTUDOS
let celular = "98143-3886";
console.log(celular.match(/\d{4,5}-?\d{4}/g) ? true : false);
let celular2 = "8143-3886";
console.log(celular2.match(/\d{4,5}-?\d{4}/g) ? true : false);
let celular3 = "81433886";
console.log(celular3.match(/\d{4,5}-?\d{4}/g) ? true : false);
let celular4 = "98143 3886";
console.log(celular4.match(/\d{4,5}-?\s?\d{4}/g) ? true : false);

// ^ começa com (vai no inicio)
// [^] dentro de colchetes é negação do que vem a seguir
// $ termina a string (vai no fim)
// \b a substring começa ou termina
// \s espaço
// \d qq numero
// \D negação de \d
// \w qq caractere alfanumerico e underscore
// \W negação de \w
// [] invervalo
// {n} pode repetir n vezes o caracter anterior
// + 1 ou mais vezes
// * 0 ou mais vezes
// ? 0 ou 1 vez
