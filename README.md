# Olika exempel för datainsamling

Detta repo innehåller några exempel/test med node för datainsamling och visulisering av insamlad data.

Tanken är att dessa små exempel ska kunna ge tankar och idéer hur datainsamling skulle kunna ske och se ut. 
Förhoppningsvis väcker det intresse och man kan se att det inte alls är särskilt svårt - det är bara idéer och tankar om vad man ska göra som behöver till först!

Exemplen är alltså tänkta att visa hur snabbt man komma igång med t ex "fri" data och sedan generera och visualisera något med datat.
I dessa exempel visualiseras datat i diagram, tabeller, en timeline, ett dashboard/infografik och med en karta - men som sagt, en visualisering kan ske på många olika sätt.


![dashboard](https://github.com/mattische/exempel-datainsamling/blob/9fd0b5b3d4db094fce702ba85e6ee4eed781daa9/images/dash2.png)



### json
När det gäller datat i de olika exemplen så är denna sparad i formatet [JSON](https://www.json.org/json-en.html). Anledningen till det är dels att de API:er som används delar datat i detta format, samt att det är ett väldigt smidigt och behändigt format att hantera data (och datapunkter) med. Särskilt stora datamängder kan snabbt och enkelt hanteras programmatiskt.

Det kan vara en bra idé att läsa på om json för att förstå hur det är uppbyggt och hur det kan användas i t ex en node-applikation.
Även om node och javascript är i fokus i dessa exempel, så kan man använda json med många olika språk vilket är smidigt om ens system består av komponenter skrivna i olika språk - datat är i samma format.

Några användbara länkar om json:

- https://www.json.org/json-en.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
- https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/
  

### express, axios, leaflet.js, chart.js
I exemplen används externa paket/moduler i node som är användbara; t ex så skapas en server med express och data hämtas med hjälp av axios.
I några av exemplen används andra bibliotek som infogas via deras CDN. Exempelvis så genereras interaktiva kartor och diagram med chart.js och leaflet.js.

Här finns mer info om dessa;

- https://expressjs.com/
- https://axios-http.com/docs/intro
- https://leafletjs.com/
- https://www.chartjs.org/





---

### Innehåll i mapparna

```
exempel-datainsamling/
├── cold-war-timeline/
├── infograph/
├── restcountries/
├── scb/ 
```

> [!TIP]
> Läs mer om respektive exempel i README.md filerna i respektive mapp.

- I mappen **[restcountries](https://github.com/mattische/exempel-datainsamling/tree/main/restcountries)** finns ett exempel med population från restcountries API:t. restcountries är ett fritt API och datat däri kan användas utan ett konto. Datainsamlingen sker alltså via ett anrop till ett API och sparas sedan lokalt i en json-fil. Innehållet i json-filen läses sedan av ett antal script som genererar filer som visualiserar datat i html-filer.

- I mappen **[infograph](https://github.com/mattische/exempel-datainsamling/tree/main/infograph)** finns ett exempel som startar en lokal server och visar insamlad data som ett "dashboard" eller enkel "infographic". Datat som används är samma som i **restcountries**, fast nu visualiserad på ett annat sätt.

- I mappen **[scb](https://github.com/mattische/exempel-datainsamling/tree/main/scb)** finns två exempel med befolkningsdata från SCB (Statistiska Centralbyrån). Datainsamlingen sker alltså via SCBs API. Datat sparas lokalt i en json-fil som sedan läses ifrån scripten som generar ett antal diagram i html.

- I mappen **[cold-war-timeline](https://github.com/mattische/exempel-datainsamling/tree/main/cold-war-timeline)** finns ett enkelt exempel som laddar in json data från en befintlig fil.
Ingen data hämtas från externt API eller liknande - här är tanken att själva datainsamlingen sker mer manuellt och sammanställs i en json-fil.


Det enklaste exemplet (om du är nybörjare i node och javascript) finns att hitta i mappen **[cold-war-timeline](https://github.com/mattische/exempel-datainsamling/tree/main/cold-war-timeline)**. 

Sedan kan du gå vidare med innehållet i de andra mapparna.




---






Skapat av 

@mattische

