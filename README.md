# Datainsamling test

Några exempel/test med node för datainsamling.

Exemplen är tänkta att visa hur snabbt man komma igång med t ex "fri" data och sedan generera något med datat.

Det enklaste exemplet (om du är nybörjare i node och javascript) finns att hitta i mappen **[cold-war-timeline](https://github.com/mattische/exempel-datainsamling/tree/main/cold-war-timeline)**. 

Sedan kan du gå vidare med innehållet i mappen **[scb](https://github.com/mattische/exempel-datainsamling/tree/main/scb)** för att avsluta här.

---

### Innehåll

I rotmappen (här) finns ett exempel med population från restcountries API:t.

I mappen **[scb](https://github.com/mattische/exempel-datainsamling/tree/main/scb)** finns två exempel med befolkningsdata från SCB.

I mappen **[cold-war-timeline](https://github.com/mattische/exempel-datainsamling/tree/main/cold-war-timeline)** finns ett enkelt exempel som laddar in json data från en befintlig fil.
Ingen data hämtas från externt API eller liknande.

Läs mer om det i respektive README.md i mapparna.

---




### I den här mappen:


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
