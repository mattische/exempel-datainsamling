# Datainsamling test

Detta är ett lite exempel/test med att node för datainsamling.

Exemplet är tänkt att visa hur snabbt man komma igång med t ex "fri" data och sedan generera något med datat.

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
```


**kör exemplet**

```
Du behöver node.

Installera moduler och kör med:


$npm install

$npm app.js

$npm world_data.js

```

sd

//@mattische
