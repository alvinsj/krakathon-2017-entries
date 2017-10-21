C’est bien connu, un moussaillon doit toujours dire oui.  Mais pas toujours facil de dire oui avec tous les pirates bizarres qui traînent sur le bateau. 
Ces quelques exercices aideront a leur apprentissage.  Dans chacune des fonctions suivantes, remplacez le ‘[param]’ par une valeure qui doit renvoyer true. Attention le nombre de caractère est limitée.



exo 1 - 25 points
En 2 caracteres max
function petitTrue( a ){
return a;
}
console.log( petitTrue( [param] ) );


exo 2 - 25 points
en 3 caracteres max
function petitTrue2(x) {
return x != x;
}

console.log(petitTrue2( [param]) );


exo 3 - 35 points
En 4 caracteres max
function petitTrue3(a, b) {
return a === b && 1/a < 1/b
}

console.log(petitTrue3( [param]) );


exo 4 - 200 points
en 9 caracteres max
function petitTrue4(f) {
var a = f(), b = f();
return a() == 1 && a() == 2 && a() == 3
&& b() == 1 && b() == 2;
}

console.log(petitTrue4( [param]) );


exo 5 - 50 points
27 caracteres max
BONUS, 150 points en moins de 19 caracteres

function petitTrue5(x) {
if (!(x instanceof Array))
return false;
for (var i = 0; i < 20; i++) {
if (x[i] != i) {
return false;
}
}
return true;
}

console.log(petitTrue5( [param]) );


exo6 - 100 points
8 caracteres max
BONUS 150 points en 7 ou moins
function petitTrue6(x,y,z) {
return x && x == y && y == z && x != z;
}
console.log(petitTrue6( [param]) );


exo7 - 75 points
en moins de 16 caractere
BONUS 150 Points


function petitTrue7(x) {
return (x++ !== x) && (x++ === x);
}
console.log(petitTrue6( [param]) );


exo8 - 30 points
16 caracteres max
function petitTrue8(x) {
return x && !("_ _proto__" in x);
}
console.log(petitTrue8( [param]) );


exo9 - 30 points
3 caracteres max
function petitTrue9(a){
return a in a;
}

console.log(petitTrue9( [param]) );
