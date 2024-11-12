# infograph

Den här mappen innehåller ett script (index.js) som startar en express server i node.
Scriptet läser in data ifrån filen data/world_data.json och generar ett antal olika diagram och en världskarta.

Tanken är att visa att man kan visualisera data på lite olika sätt. I detta fall använder vi samma data som i tidigare exempel, men vi visualiserar det på annat sätt.

Det data som används är alltså samma data som i exemplet i mappen **restcountries**.
Inget data hämtas nu från ett API i detta exemplet - vi utgår alltså ifrån tidigare insamlad data.

För att kunna köra exemplet krävs, förutom node, även express som kan installeras med;

```
$npm install express
```

För att sedan starta exemplet så kör i en terminal;

```
$node index.js
```

vilket startar en server på [localhost:3000](http://localhost:3000/) som du kan öppna i webbläsaren.

### filerna är

```
project-directory/
├── index.js           # startar en express server, läser in json-filen
├── public/
│   ├── index.html     # html-fil som visar infographics/dashboard (chart.js och leaflet.js används för att generar diagram och karta)
│   ├── style.css      # för styling
│   ├── script.js      # för att generera diagram och karta med datat i data/world_data,json
│   
└── data/
    └── world_data.json  # json data över länder - samma data som in exemplet restcountries
```
