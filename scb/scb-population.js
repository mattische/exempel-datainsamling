const axios = require('axios');
const fs = require('fs');

// SCB:s engelska endpoint för befolkningsstatistik
const url = 'https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101A/BefolkningNy';

// Funktion för att hämta befolkningsdata för Sveriges storstäder
async function fetchLargeCitiesPopulationData() {
    try {
        // Skapa ett POST-anrop med sökparametrar för specifika regioner
        const response = await axios.post(url, {
            query: [
                {
                    code: "Region",
                    selection: {
                        filter: "item",
                        values: ["0180", "1480", "1280"] // Regionkoder för Stockholm, Göteborg, och Malmö
                    }
                },
                {
                    code: "Tid",
                    selection: {
                        filter: "item",
                        values: ["2022"] // År 2022
                    }
                }
            ],
            response: {
                format: "json"
            }
        });

        const data = response.data.data;

        // Formatera data till ett objekt för att använda i HTML och Chart.js
        const populationData = data.map(item => ({
            region: item.key[0],
            population: parseInt(item.values[0], 10)
        }));

        // Skriv data till en JSON-fil som vi kommer att läsa in i HTML
        fs.writeFileSync('population_data_large_cities.json', JSON.stringify(populationData, null, 2));

        console.log("Data successfully fetched and saved to population_data_large_cities.json");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Kör funktionen
fetchLargeCitiesPopulationData();
