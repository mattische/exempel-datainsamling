const axios = require('axios');
const fs = require('fs');

// SCB:s engelska endpoint för befolkningsstatistik
const url = 'https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101A/BefolkningNy';

// Funktion för att hämta befolkningsdata för Sveriges storstäder över flera år
async function fetchPopulationGrowthData() {
    try {
        // Skapa ett POST-anrop med sökparametrar för specifika regioner och år från 1973 till 2022
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
                        values: Array.from({ length: 2022 - 1973 + 1 }, (_, i) => (1973 + i).toString()) // År 1973-2022
                    }
                }
            ],
            response: {
                format: "json"
            }
        });

        const data = response.data.data;

        // Organisera data i ett objekt per region och år
        const populationData = {
            Stockholm: [],
            Gothenburg: [],
            Malmo: []
        };

        // Mappa regionkoder till regionnamn för enkel åtkomst
        const regionMap = {
            "0180": "Stockholm",
            "1480": "Gothenburg",
            "1280": "Malmo"
        };

        // Bearbeta data för varje region och år
        data.forEach(item => {
            const region = regionMap[item.key[0]];
            const year = item.key[1];
            const population = parseInt(item.values[0], 10);
            populationData[region].push({ year, population });
        });

        // Spara data till en JSON-fil för att läsa in i HTML-filen
        fs.writeFileSync('population_growth_large_cities.json', JSON.stringify(populationData, null, 2));

        console.log("Data successfully fetched and saved to population_growth_large_cities.json");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Kör funktionen
fetchPopulationGrowthData();
