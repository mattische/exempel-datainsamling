![world map](https://github.com/mattische/exempel-datainsamling/blob/a37687a467e52101b2791fb316958db59f6ae1af/images/world_map.png)

# restcountries



### Filer


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

Installera de moduler moduler som krävs (express, axios, lodash och jsdom):

Kör kommandot:

```

$npm install

```

eller om du av någon anledning vill installera dessa "mer manuellt":

```
$npm install express axios lodash jsdom
```

kör hela detta exempel med kommandona i tur och ordning:



```
//genererar filer
$node app.js

//genererar filer, startar en server och öppnar de filerna i en webbläsare
$node world_data.js

```

Det som händer är att:

- world_data.js - generar filerna **world_data.html** (data i en enkel html-tabell), **world_heatmap_openlayers.html** (en världskarta med symboler över population) som du sedan kan öppna i din webbläsare/browser.
- app.js startar en server på **http://localhost:3000** med datat visualiaserat i diagrmaform. Öppna sidan (kopiera länken här t.v och klistra in i webbläsaren.
