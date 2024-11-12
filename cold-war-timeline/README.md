# exempel med insamlad data

Tanken med det här exemplet är att det ska vara enkelt.

Förhoppningsvis kan detta ge en ingång till hur insamlad data kan visualiseras.

html-filen visar en timeline över några årtal under kalla kriget.
Datainsamlingen har gjorts manuellt, dvs data hämtas inte programmatiskt - den har för hand skrivits in i en .json-fil. 

Datat är alltså några viktiga årtal under [kalla kriget](https://sv.wikipedia.org/wiki/Kalla_kriget) samt information kring dessa händelser. Denna "data" har sparats i en .json fil.

### Filerna:

**events.json:** Data för viktiga årtal, titlar, beskrivningar och bilder lagras i events.json. Innehållet i den här filen läses in med JS från timeline.html.

**timeline.html:** Öppna den här i webbläsaren. Består av html, css och javascript för att visa timeline samt hämta datat från json-filen.


