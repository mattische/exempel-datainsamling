/**
 * HÄMTAR DATA FRÅN RESTCOUNTRIES API OCH VISAR I STAPELDIAGRAM
 * Startar en server route som visar stapeldiagram med befolkningsdata
 * Route: http://localhost:3000/
 */

const express = require('express');
const axios = require('axios');
//const Chart = require('chart.js'); //obsolete
const { JSDOM } = require('jsdom');
const _ = require('lodash');

const app = express();
const port = 3000;

// Hämta befolkningsdata från Restcountries API
async function getPopulationData() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const data = response.data;

    // country sorteras ut med namn, population och kontinent
    const populationData = data.map(country => ({
      name: country.name.common,
      population: country.population || 0,
      continent: country.region || 'Other',
    }));

    // Sortera varje land efter population i fallande ordning
    const sortedData = _.orderBy(populationData, ['population'], ['desc']);

    return sortedData;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
}

// Gruppera länder efter kontinent
function groupDataByContinent(data) {
  return _.groupBy(data, 'continent');
}

// datat formateras för chart.js - labels och population (som blir stapeldiagrammet)
function prepareChartData(data) {
  const chartData = {};

  // Loopa genom varje kontinent
  Object.keys(data).forEach(continent => {
    const continentData = data[continent];

    // Skapa labels för landets namn ocj population
    const labels = continentData.map(country => country.name);
    const populations = continentData.map(country => country.population);

    chartData[continent] = {
      labels,
      populations,
    };
  });

  return chartData;
}

// Skapa html med stapeldiagrammen
async function createChartPage() {
  const populationData = await getPopulationData(); //hämta data
  const groupedData = groupDataByContinent(populationData); //filtrera och gruppera data
  const chartData = prepareChartData(groupedData); //formatera data för chart.js

  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Population Chart</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </head>
      <body>
        <div style="width: 80%; margin: auto;">
          ${Object.keys(chartData).map(
    continent => `
              <canvas id="${continent}Chart" width="400" height="200"></canvas>
            `
  ).join('')}
        </div>
        <script>
          ${Object.keys(chartData).map(continent => `
            var ctx${continent} = document.getElementById('${continent}Chart').getContext('2d');
            var ${continent}Chart = new Chart(ctx${continent}, {
              type: 'bar',
              data: {
                labels: ${JSON.stringify(chartData[continent].labels)},
                datasets: [{
                  label: '${continent} - population',
                  data: ${JSON.stringify(chartData[continent].populations)},
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                }],
              },
            });
          `).join('')}
        </script>
      </body>
    </html>
  `);

  //glöm inte serialize för att få ut html
  return dom.serialize();
}

// route för att visa sidan med stapeldiagrammen
app.get('/', async (req, res) => {
  const chartPage = await createChartPage();
  res.send(chartPage);
});

// Starta servern
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
