# Datainsamling test

Detta är ett lite exempel/test med att node för datainsamling.

Exemplet är tänkt att visa hur snabbt man komma igång med t ex "fri" data och sedan generera något med datat.

**app.js**

```
Startar en node-server (loaclhost:3000) och genererar en html-sida.

Stapeldiagram visas över kontinenter över population.
```


**world_data.js**

```
Hämtar data och skapar en json-fil med all data i.

Genererar två html-filer: 

- en med en världskarta och färgmarkeringar över länder utifrån deras population

- en med en 'vanlig' html tabell över länder sorterad över population

- skriver ut, med console.log, vald kontinent att visa json datat

- startar browser (med open-kommandot) med html-sidorna
```

