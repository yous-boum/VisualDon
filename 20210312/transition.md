#Comment fonctionnent les transitions en D3 et en svelte

***

##En d3

Pour appliquer une transition, sélectionnez des éléments, appelez selection.transition, puis apportez les modifications souhaitées.

Les transitions prennent en charge la plupart des méthodes de sélection (telles que transition.attr et transition.style à la place de selection.attr et selection.style), mais toutes les méthodes ne sont pas prises en charge ; par exemple, vous devez ajouter des éléments ou lier des données avant le début d'une transition. Un opérateur transition.remove est fourni pour la suppression pratique des éléments lorsque la transition se termine.

Pour calculer l'état intermédiaire, les transitions utilisent une variété d'interpolateurs intégrés. Les couleurs, les nombres et les transformateurs sont automatiquement détectés. Les chaînes avec des nombres incorporés sont également détectées, comme c'est courant avec de nombreux styles (tels que le remplissage ou la taille de police) et chemins. Pour spécifier un interpolateur personnalisé, utilisez transition.attrTween, transition.styleTween ou transition.tween.

##En svelte

On importe les effets de svlet 

on utilise transition : et on mets l'effet qu'on suite appliquer, on peut ajouter des détails sur la durée ou autre.