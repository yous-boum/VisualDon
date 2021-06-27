const DATA = require('data.json');

const format = d => ({
  nom: d.Nom,
  exp: [
    d["Hommes-2015"],
    d["Hommes-2016"],
    d["Hommes-2017"],
    d["Hommes-2018"],  
  ],
  imp: [
    d["Femmes-2015"],
    d["Femmes-2016"],
    d["Femmes-2017"],
    d["Femmes-2018"],  
  ],
})

console.log(DATA.map(format));