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
//startar en server som genererar html diagram i responset (när localhost:3000)
$node app.js

//genererar filer, startar en server och öppnar de filerna i en webbläsare
$node world_data.js

```

### Flöde/det som händer när scripten körs:

- **app.js**
  
  - startar en express-server på **http://localhost:3000** med datat visualiaserat i diagrmaform. Öppna sidan (kopiera länken här t.v och klistra in i webbläsaren.
  - det görs ett request till API:t med funktionen getPopulationhData(). All data hämtas och sparas i en array som returneras.
  - funktionen groupData() sorterar hämtad data utifrån kontinenter.
  - funtionen prepareChartData() grupperar och ordnar datat, så att datat kan visas i diagram för respektive kontinent, på en html-sida.
  - funktionen createChartPage() tar emot behandlad array med all data och genererar diagram - ett stapeldiagram för respektive kontinent.
  - öppna sidan <a href="http://localhost:3000/" target="_blank">localhost:3000</a> för att se de genererade diagramen.
  - stoppa servern i terminalen med Ctrl + c.

- **world_data.js** 

  - börja läsa i koden längst ned i filen;
  - det görs ett request till API:t med funktionen saveAndFetchData(). All data hämtas och sparas i filen world_data.json.
  - filerna **world_data.html** (data i en enkel html-tabell), **world_heatmap_openlayers.html** (en världskarta med symboler över population) skapas med data från requestet.
  - i konsolen frågas det efter vilka kontinenter man vill skriva ut data för. När man har svarat så skrivs rådatat ut i konsolen utifrån vald kontinent.
  - funktionen openBrowser() körs och öppnar de generarde html-filerna i webbläsaren (automatiskt).
  - om API:t inte går att nå så finns en fallback-funktion som försöker öppan sparat data i json-filen: readJsonFile().
  
