# Datainsamling test

Detta är ett snabbt test att hämta "fri" data och sedan generera sidor
med den datan.

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

