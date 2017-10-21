// exo 4 - 200 points
// en 9 caracteres max
function petitTrue4(f) {
  var a = f(),
    b = f();
  return a() == 1 && a() == 2 && a() == 3 && b() == 1 && b() == 2;
}

const param = (i = 1) => _ => i++;
console.log(petitTrue4(param));
