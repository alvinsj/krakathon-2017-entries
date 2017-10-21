// exo 5 - 50 points
// 27 caracteres max
// BONUS, 150 points en moins de 19 caracteres

function petitTrue5(x) {
  if (!(x instanceof Array)) return false;
  for (var i = 0; i < 20; i++) {
    if (x[i] != i) {
      return false;
    }
  }
  return true;
}

console.log(petitTrue5([param]));
