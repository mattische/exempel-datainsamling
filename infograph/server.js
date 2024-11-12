const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Använd statiska filer för CSS
app.use(express.static('public'));

// Läs JSON-data
const data = JSON.parse(fs.readFileSync('./events.json', 'utf8'));

app.get('/', (req, res) => {
  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Infographics on Cold War Events</title>
      <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <div class="container">
          <h1>Cold War Events</h1>
          ${data.map(event => `
          <div class="event">
              <img src="${event.image}" alt="${event.title}">
              <div class="content">
                  <h2>${event.title} (${event.year})</h2>
                  <p>${event.description}</p>
              </div>
          </div>
          `).join('')}
      </div>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});