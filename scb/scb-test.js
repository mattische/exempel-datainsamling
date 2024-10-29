const axios = require('axios');

// SCB:s engelska endpoint för befolkningsstatistik
// "Population by region, marital status, age, sex, observations and year",
const url = 'https://api.scb.se/OV0104/v1/doris/en/ssd/BE/BE0101/BE0101A/BefolkningNy';

// Funktion för att hämta befolkningsdata
async function fetchPopulationData() {
    try {
        // Skapa ett POST-anrop med sökparametrar för att få data från SCB
        const response = await axios.post(url, {
            query: [
                {
                    code: "Region",
                    selection: {
                        filter: "item",
                        values: ["0180", "0123", "1480"] // Regionkoder för Stockholm, Huddinge, och Umeå
                    }
                },
                {
                    code: "Tid",
                    selection: {
                        filter: "item",
                        values: ["2024"] // År 
                    }
                }
            ],
            response: {
                format: "json"
            }
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        const data = response.data.data;
        
        // Skriv ut befolkningsdata för de valda kommunerna
        data.forEach(item => {
            console.log(`Region: ${item.key[0]}, Population year ${item.key[1]}: ${item.values[0]}`);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Kör funktionen
fetchPopulationData();
