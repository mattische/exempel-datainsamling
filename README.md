# Datainsamling test

Två exempel/test med node för datainsamling.

Exemplen är tänkta att visa hur snabbt man komma igång med t ex "fri" data och sedan generera något med datat.

I rotmappen finns ett exempel med population från restcountries API:t och i mappen scb finns två exempel med befolkningsdata från SCB.
Läs mer om det i README.md i scb-mappen.



**app.js**

```
- startar en node-server (express, localhost:3000) och genererar en html-sida.

- stapeldiagram visas över kontinenter över population.
```


**world_data.js**

```
- hämtar data och skapar en json-fil med all data i.

- genererar två html-filer: 

- en med en världskarta och färgmarkeringar över länder utifrån deras population

- en med en 'vanlig' html tabell över länder sorterad över population

- skriver ut, med console.log, vald kontinent att visa json datat

- startar browser (med open-kommandot) med html-sidorna
````



**kör exemplet**

Du behöver node.

Installera moduler:


```

$npm install

````

kör med:



```

$node app.js

$node world_data.js

```

world_data.js - generar world_data.html, world_heatmap_openlayers.html som kan öppnas i browsern.
app.js - en server startas på http://localhost:3000 med diagramdata.

```
//@mattische
````
