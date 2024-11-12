fetch('/data')
    .then(response => response.json())
    .then(data => {
        const sortedData = data.sort((a, b) => b.population - a.population);

        const top5Countries = sortedData.slice(0, 5);
        const least5Countries = sortedData.slice(-5);
        const regions = Array.from(new Set(data.map(country => country.region)));

        renderTop5PopulatedChart(top5Countries);
        renderLeast5PopulatedChart(least5Countries);
        renderPopulationByRegionChart(data, regions);
        renderMap(data);
    });

function renderTop5PopulatedChart(data) {
    new Chart(document.getElementById('top5PopulatedChart'), {
        type: 'bar',
        data: {
            labels: data.map(country => country.name),
            datasets: [{
                label: 'Befolkning',
                data: data.map(country => country.population),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Befolkning'
                    }
                }
            }
        }
    });
}

function renderLeast5PopulatedChart(data) {
    new Chart(document.getElementById('least5PopulatedChart'), {
        type: 'bar',
        data: {
            labels: data.map(country => country.name),
            datasets: [{
                label: 'Befolkning',
                data: data.map(country => country.population),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Befolkning'
                    }
                }
            }
        }
    });
}

function renderPopulationByRegionChart(data, regions) {
    const regionPopulations = regions.map(region => {
        return data
            .filter(country => country.region === region)
            .reduce((acc, country) => acc + country.population, 0);
    });

    new Chart(document.getElementById('populationByRegionChart'), {
        type: 'doughnut',
        data: {
            labels: regions,
            datasets: [{
                label: 'Befolkning per region',
                data: regionPopulations,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}

function renderMap(data) {
    const map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 5,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    data.forEach(country => {
        if (country.latlng && country.capital) {
            const [lat, lng] = country.latlng;
            const marker = L.marker([lat, lng]).addTo(map);
            marker.bindTooltip(
                `<strong>${country.name}</strong><br>Huvudstad: ${country.capital[0]}<br>Befolkning: ${country.population.toLocaleString()}`
            );
        }
    });
}
