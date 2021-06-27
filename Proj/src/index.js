import DATA from '../data/data_bis.js';
import Chart from 'chart.js';
import * as R from 'ramda';

let ctx = $('#myChart');

let typeTab = [];
let sort = 'fem';
let x = [];
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels:["2015", "2016", "2017", "2018"],
    }
});

const getData = ({nom}) => R.find(d => d.nom === nom, DATA);
const createCharteFem = ({fem, nom, couleur}) => ({
  label: nom,
  data: fem,
  borderColor: [
  couleur,
  ],
  backgroundColor: [
'rgba(128, 128, 128, 0)',
  ],
  borderWidth: 2
});

const createCharteHom = ({hom, nom, couleur}) => ({
  label: nom,
  data: hom,
  borderColor: [
  couleur,
  ],
  backgroundColor: [
'rgba(128, 128, 128, 0)',
  ],
  borderWidth: 2
})

$("#first > button").on('click', event => {

    let type = $(event.currentTarget).data();

    if ($(event.currentTarget).hasClass("selected")) {
    $(event.currentTarget).removeClass("selected");
    let pos = typeTab.indexOf(type.name);
    typeTab.splice(pos, 1);
        
   } else {
        $(event.currentTarget).addClass("selected");
        typeTab.push({
          nom : type.name,
          couleur: type.color});
   };

  if (sort === 'hom') {
    x = typeTab.map(prestations => ({
    ...prestations,
    ...getData(prestations)
   }))
   .map(createCharteHom);
      };

   if (sort === 'fem') {
    x = typeTab.map(prestations => ({
    ...prestations,
    ...getData(prestations)
   }))
   .map(createCharteFem);
      };

   $("button").trigger('change');   

});

$("li").on('mouseover', event => {
  $(event.currentTarget).addClass("selected")
});

$("li").on('mouseleave', event => {
  $(event.currentTarget).removeClass("selected")
});

$(".sort").on('click', event => {


  $('.sort').removeClass("selected");
  $(event.currentTarget).addClass("selected"); 

  sort = $(event.currentTarget).data().sort; 

  if (sort === 'hom') {
    x = typeTab.map(prestations => ({
    ...prestations,
    ...getData(prestations)
   }))
   .map(createCharteHom);
      };

   if (sort === 'fem') {
    x = typeTab.map(prestations => ({
    ...prestations,
    ...getData(prestations)
   }))
   .map(createCharteFem);
      };    

  $("button").trigger('change');
  
});

$("button").on('change', event => {

   myChart.destroy();
  
   myChart = new Chart(ctx, {

    type: 'line',
    data: {
      labels:["2015", "2016", "2017", "2018"],
      datasets: x
    },
    options: {
        legend: {
            labels: {
                fontSize: 12,
               
            }
        },
        scales: {
            yAxes: [
                {
                    scaleLabel: {
                        labelString: "Francs par habitant et mois ",
                    },
                }
            ],
        },

    }

});

});


