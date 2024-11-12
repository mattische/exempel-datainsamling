# Datainsamling test

Detta repo innehåller några exempel/test med node för datainsamling och visulisering av insamlad data.

Tanken är att dessa små exempel ska kunna ge tankar och idéer hur datainsamling skulle kunna ske och se ut. 
Förhoppningsvis väcker det intresse och man kan se att det inte alls är svårt - det är bara idéer och tankar om vad man ska göra som behöver till först!

Exemplen är alltså tänkta att visa hur snabbt man komma igång med t ex "fri" data och sedan generera och visualisera något med datat.
I dessa exempel visualiseras datat i diagram, tabeller, en timeline och med en karta - men som sagt, en visualisering kan ske på många olika sätt.

Det enklaste exemplet (om du är nybörjare i node och javascript) finns att hitta i mappen **[cold-war-timeline](https://github.com/mattische/exempel-datainsamling/tree/main/cold-war-timeline)**. 

Sedan kan du gå vidare med innehållet i mappen **[scb](https://github.com/mattische/exempel-datainsamling/tree/main/scb)** för att i mappen **restcountries**.

---

### Innehåll

- I mappen **restcountries** finns ett exempel med population från restcountries API:t. restcountries är ett fritt API och datat däri kan användas utan ett konto. Datainsamlingen sker alltså via ett anrop till ett API och sparas sedan lokalt i en json-fil. Innehållet i json-filen läses sedan av ett antal script som genererar filer som visualiserar datat i html-filer.

- I mappen **[infograph](https://github.com/mattische/exempel-datainsamling/tree/main/infograph)** finns ett exempel som startar en lokal server och visar insamlad data som ett "dashboard" eller enkel "infographic". Datat som används är samma som i **restcountries**, fast nu visualiserad på ett annat sätt.

- I mappen **[scb](https://github.com/mattische/exempel-datainsamling/tree/main/scb)** finns två exempel med befolkningsdata från SCB (Statistiska Centralbyrån). Datainsamlingen sker alltså via SCBs API. Datat sparas lokalt i en json-fil som sedan läses ifrån scripten som generar ett antal diagram i html.

- I mappen **[cold-war-timeline](https://github.com/mattische/exempel-datainsamling/tree/main/cold-war-timeline)** finns ett enkelt exempel som laddar in json data från en befintlig fil.
Ingen data hämtas från externt API eller liknande - här är tanken att själva datainsamlingen sker mer manuellt och sammanställs i en json-fil.

Läs mer om det i respektive README.md i mapparna.

---





```
//@mattische 24
````
