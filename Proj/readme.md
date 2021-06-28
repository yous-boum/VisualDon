# Coûts de la santé par sexe et par habitant et mois

## Site publié

https://yous-boum.github.io/projet/

## Groupe de travail

Ce travail a été réalisé par Yousra Boumasmoud et Alan Phillip Rodriguez

## Jeu de données

Coûts de la santé par âge et par sexe (estimations), disponible sur [Opendata.swiss](https://opendata.swiss/fr/dataset/gesundheitskosten-nach-alter-und-geschlecht-schatzung4)

***
## Préparation des données

Les données sont disponoibles sous format excel. Ils ont d'abord été travaillé manuellement sur excel pour en extraire des données valables pour 4 ans, 2015. 2016, 2017 et 2018. Par manque de temps, nous avons abandonné l'idée de faire plusieurs graphes, on a donc choisi de représenter uniquement le coût de la santé par sexe par habitant et mois. Ensuite on l'a mis en csv, en format json et pour finir on l'a mis sous format js.
Les fichiers correspondant aux différentes étapes est disponible sur le dossier data.

***

## Graphique et choix des bibliothèques
Nous avons choisi d'utiliser Chart.js pour générer le graphique, dans ce cadre nous avons d'abord hésiter entre Line Chart et Bar Chart comme graphique, finalement nous avons opté pour le plus simple à savoir le Line Chart pour pouvoir comparer l'évolution des coûts durant les années par prestations et aussi faciliter la lisibilité de la comparaison entre prestation médicale. Nous avons aussi utilisé Ramda.js pour la récupération des données.
Nous pouvons afficher les résultats des coût de santé par sexe, nous choisissons si c'est pour les hommes ou pour les femmes, ensuite et grâce aux boutons disponible à droite du graphe, nous pouvons choisir le coût par prestation et les afficher ensemble sur le même graphe si on souhaite par exemple comparer les résultats.




