//hämtar data om länder ifrån https://restcountries.com/v3.1/all
// och sparar i en array och skriver till fil

const axios = require("axios");
const fs = require("fs");
const { get } = require("lodash");
const { count } = require("console");

//readline för att läsa input från konsolen
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//urlen som datat ska hämtas ifrån
const url = "https://restcountries.com/v3.1/all";
//filnamnet som json filen ska sparas som
const filename = "world_data.json";

//axios för att hämta data /ifrån https://restcountries.com/v3.1/all'
//och sparar som json i en fil
function saveAndFetchData() {
   axios.get(url)
     .then((res) => {
       let countries = [];
       res.data.forEach((country) => {
         countries.push({
           name: country.name.common,
           capital: country.capital,
           region: country.region,
           subregion: country.subregion,
           population: country.population,
           area: country.area,
           borders: country.borders,
           languages: country.languages,
           flag: country.flags.png,
           latlng: country.latlng,
         });
       });
       //spara datat som en json fil
        //gör datat till en json fil
      fs.writeFileSync(filename, JSON.stringify(countries, null, 2));
      console.info("\n info: hämtat data och sparat fil\n");

    });
}

//läser in json filen och returnerar innehållet (som json array)
function readJsonFile() {
  return JSON.parse(fs.readFileSync(filename));
}

//en funktion som sorterar länderna efter parametern som skickas in
//det finns 8 olika parametrar att välja mellan:
//name, capital, region, subregion, population, area, borders, languages
function sortCountries(countries, param) {
  countries.sort((a, b) => {
    if (a[param] < b[param]) {
      return -1;
    }
    if (a[param] > b[param]) {
      return 1;
    }
    return 0;
  });
  return countries;
}

//en funktion som placerar länderna i de regioner som finns
//parametern som skickas in är den region som man vill returnera
//det finns 6 olika regioner att välja mellan:
//Africa, Americas, Asia, Europe, Oceania, Polar
function getCountriesByRegion(region) {
  let countries = readJsonFile();
  let countriesByRegion = countries.filter((country) => {
    if (country.region === region) {
      return country;
    }
  });
  return countriesByRegion;
}

//läs in json filen och skapa en html sida som en tabell
function createHtmlTable() {
  let countries = readJsonFile();
  countries = sortCountries(countries, "population");
  let html = "<html><body><a href='world_data.json'>JSON fil</a><h1>Länder efter population</h1><table border=1>";
  html += "<tr><th>Land</th><th>Population</th><th>Latid/Longitud</th></tr>";
  countries.forEach((country) => {
    html += `<tr><td>${country.name}</td><td>${country.population}</td><td>${country.latlng}</td></tr>`;
  });
  html += "</table></body></html>";
  fs.writeFileSync("world_data.html", html);
}

//en funktion som skapar en html sida som använder Openlayers för att skapa kartan 
//och lägger till markörer för varje land
//markörerna är färgade efter populationen - ju större population desto rödare markör
function createHtmlHeatMapOpenLayers() {
  let countries = readJsonFile();
  countries = sortCountries(countries, "population");
  let html = `<html><head>
  <link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
  <style>
    .map {
      height: 100%;
      width: 100%;
    }
  </style>
  <script src="https://openlayers.org/en/v4.6.5/build/ol.js" type="text/javascript"></script>
</head><body>
<a href="world_data.json">JSON fil</a>
<h1>Länder efter population</h1>
<table><tr><td>GRÖN < 10 miljoner</td><td> - BLÅ 10 och 50 miljoner</td>
<td> - LILA 50 och 100 miljoner</td><td> - GUL 100 och 500 miljoner</td>
<td> - ORANGE 500 miljoner och 1 miljard </td><td> - RÖD > 1 miljard</td></tr></table>

<div id="map" class="map"></div><script type="text/javascript">
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([7, 20]),
    zoom: 4,
  }),
});
`;
  countries.forEach((country) => {
    let color = "red";
    if (country.population < 10000000) {
      color = "green";
    } else if (country.population < 50000000) {
      color = "blue";
    }
    else if (country.population < 100000000) {
      color = "purple";
    }
    else if (country.population < 500000000) {
      color = "yellow";
    }
    else if (country.population < 1000000000) {
      color = "orange";
    }
    html += `
var marker = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([${country.latlng[1]}, ${country.latlng[0]}])),
}
);
marker.setStyle(new ol.style.Style({
  image: new ol.style.Circle({
    radius: 10,
    fill: new ol.style.Fill({color: '${color}'}),
  }
  ),
}
));
var vectorSource = new ol.source.Vector({
  features: [marker]
}
);
var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
}
);
map.addLayer(markerVectorLayer);
`;
  }
  );
  html += "</script></body></html>";
  fs.writeFileSync("world_heatmap_openlayers.html", html);
}

//hämtar och sparar data till fil
saveAndFetchData();
//användaren skriver in i konsolen vilken region som ska skrivas ut
let region = "";
readline.question("Vilken region vill du se (Alla, Africa, Americas, Asia, Europe, Oceania, Polar)? ", (usrregion) => {
  region = usrregion;
  readline.close();

  //htmltabell efter population
  createHtmlTable();
  //heatmap efter population
  createHtmlHeatMapOpenLayers();
  //skriv ut europas länder i konsolen sorterade efter population
  let reg = getCountriesByRegion(region);
  sortCountries(reg, "population");
  console.log(reg);
  
  openBrowser();
});

//öppnar webbläsaren med de sparade filerna
function openBrowser() {
  const { exec } = require("child_process");
  exec("open world_data.html");
  exec("open world_heatmap_openlayers.html");
}



