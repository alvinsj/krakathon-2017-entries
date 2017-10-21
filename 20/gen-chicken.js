const gen = n => {
  var chickens =
    'chicken chicken chicken chicken chicken chicken chicken chicken chicken chicken';
  for (var i = 0; i < n; i++) chickens += ' chicken';

  return `${chickens}
chicken chicken chicken chicken chicken chicken chicken chicken chicken`;
};

console.log(gen(70));
// for (var i = 65; i < 91; i++) console.log(gen(i));
// for (var i = 0; i < 24; i++) console.log('chicken chicken');
