# La nostra cucina — Ricettario di Lorenzo 1.5.0

22 schede ricavate da tutti i 23 file della cartella Google Drive “Ricette”, letti il 31 ottobre 2026. Incluse introduzione e dedica, consultabili in “Fonti e storia”. I testi estratti delle 23 fonti sono conservati integralmente in recipes.json e data.js.

## Uso

Apri il sito, oppure il file autonomo Ricettario_Lorenzo_v1.5.0.html. Lo ZIP contiene il progetto HTML/PWA completo: estrailo e pubblicalo con il tuo programma Pubblica. I file index.html, sw.js e manifest.webmanifest devono trovarsi alla radice del repository.

Ricerca per titolo, ingrediente e contenuto; filtri per categoria, preferiti e schede da verificare; inserimento, modifica, duplicazione ed eliminazione con annullamento. La sezione Dedica conserva il testo originale. Sono disponibili tema chiaro, scuro o di sistema, cinque palette e quattro colori personalizzabili.

## Stampa ed esportazione

La sezione “Stampa ed esporta” seleziona inizialmente tutte le ricette; è possibile limitarle con ricerca e spunte. Genera localmente:

- anteprima di stampa completa;
- PDF multipagina;
- DOCX modificabile in Word;
- Excel XLSX con due fogli, “Ricette” e “Ingredienti”.

Il foglio Ricette conserva il testo completo. Il foglio Ingredienti estrae le righe dalla sezione ingredienti di ogni ricetta; quando la fonte non separa chiaramente gli ingredienti, rimanda al testo completo. Note e fonti si possono includere o escludere. Nessun contenuto viene inviato a un server per creare i file.

## Spesa con AI

Seleziona una o più ricette, indica il numero di persone, la dispensa e le preferenze. Con una chiave Gemini o OpenRouter già configurata l’app chiede all’AI una lista raggruppata e modificabile. In alternativa copia il prompt, usalo in ChatGPT e incolla il JSON restituito. La lista può essere spuntata, modificata, stampata, copiata o scaricata in TXT e resta separata dal backup delle ricette. Le quantità prodotte dall’AI devono essere controllate, soprattutto quando la fonte non indica persone o unità.

## Spesa comunità

La sezione “Spesa comunità” contiene i 110 prodotti del file Google Drive `Lista_Spesa_Aggiornata`. Ogni prodotto può essere spuntato, modificato, eliminato, completato con una quantità e assegnato ad Angelo, Eurospin o Altro. I nove prodotti che nel foglio originale avevano reparto Eurospin sono inizialmente assegnati a Eurospin; gli altri ad Angelo. Si possono aggiungere nuovi prodotti e usare un campo ALTRO ampio per promemoria liberi. Le modifiche restano nel browser e non riscrivono il file Drive.

Ogni data conserva una giornata indipendente con quantità, spunte, supermercati, prodotti aggiunti e testo ALTRO. Si può aprire una data dal calendario o dallo storico, tornare a oggi e copiare la giornata precedente. Il salvataggio è automatico. “Esporta giorno CSV” crea un foglio apribile con Excel; “Esporta tutte le giornate” crea un archivio JSON completo, reimportabile e utile per trasferire i dati su un altro dispositivo.

La stampa include solo i prodotti spuntati o con quantità e li raggruppa per supermercato e reparto. Il layout usa un A4 orizzontale compatto; con elenchi eccezionalmente lunghi è opportuno controllare l’anteprima del browser prima di confermare.

## Calendario menù stagionale

La sezione “Calendario menù” conserva due schemi settimanali distinti, Invernale ed Estivo. In modalità automatica viene usato lo schema invernale da ottobre a marzo e quello estivo da aprile a settembre; si può forzare una stagione in qualsiasi momento. Ogni giorno della settimana può contenere più portate, ingredienti, quantità, unità e dosi base per un certo numero di persone.

Il calendario ripete automaticamente lo schema settimanale. Una singola data può essere personalizzata senza modificare tutte le altre settimane e può poi tornare allo schema stagionale. Il numero di persone predefinito è modificabile e ogni data può avere un valore proprio. Le quantità numeriche degli ingredienti vengono proporzionate alle persone e gli ingredienti equivalenti vengono sommati quando nome e unità coincidono.

Le ricette del ricettario possono essere importate in una portata. L’estrazione degli ingredienti è automatica ma deve essere controllata, soprattutto per testi non strutturati, quantità “q.b.” o unità mancanti. Il menù del giorno si può stampare o esportare in CSV; calendario, schemi e variazioni si possono esportare e reimportare in JSON.

Lo schema invernale 2026/2027 è precompilato dal prospetto fornito: pranzo e cena dal lunedì al sabato, più la domenica alternata. Le portate “1ª e 3ª settimana” e “2ª e 4ª settimana” vengono selezionate automaticamente in base alla data; la quinta settimana resta distinta e può essere compilata dall’editor. Eventuali schemi già personalizzati vengono conservati e non sovrascritti dall’aggiornamento.

I dati si salvano su questo browser/dispositivo. Le modifiche nell’app non modificano i file originali su Drive. Non c’è sincronizzazione automatica. Per le ricette usa “Esporta backup” e “Importa ricette” nelle impostazioni ⚙; per le giornate di spesa usa i pulsanti JSON della sezione “Spesa comunità”.

L’importazione accetta il JSON di questa app: aggiunge ID nuovi oppure ripristina un backup completo, in base alla modalità scelta nelle impostazioni. Non esegue estrazione automatica di nuovi PDF o Word. Per nuovi testi usa l’editor della ricetta.

## AI

1. Apri Assistente AI e scegli Gemini o OpenRouter.
2. Inserisci una chiave personale ottenuta dal relativo fornitore.
3. Premi “Carica modelli disponibili” e scegli un modello compatibile con il tuo account.
4. Scrivi la domanda ed eventualmente seleziona una ricetta da allegare.
5. Premi “Chiedi all’AI”. Puoi salvare la risposta come nuova bozza modificabile.

Si inviano soltanto la domanda e la ricetta eventualmente selezionata. L’archivio intero non viene inviato. Le chiavi restano nella memoria della pagina fino alla sua chiusura o ricaricamento: non si salvano nel backup, nei file di progetto o nel browser. Il collegamento è diretto al provider, senza server intermedio. Richiede rete e autorizzazioni CORS del servizio; costi, modelli e limiti dipendono dal tuo account. Non è presente una ricerca web automatica nelle risposte AI.

Senza chiave puoi usare “Copia prompt”, aprire ChatGPT e incollare il testo. Nessun account o abbonamento viene creato dall’app.

## Ricerca esterna e API

- Ricerca web: query libera e vincoli, Google o DuckDuckGo, apertura in nuova scheda.
- TheMealDB: ricerca per nome e ricetta casuale, consultazione e importazione volontaria nell’editor, con ingredienti, procedimento e riferimento alla fonte. Le ricerche e i testi sono generalmente in inglese. Chiave pubblica di test `1` predefinita per uso personale/sviluppo/didattica secondo i termini. Chiave supporter personale inseribile nelle impostazioni; verificare termini prima della distribuzione pubblica.
- Spoonacular: alternativa verificata, con API key personale e piani/limiti propri; non collegata in questa versione.
- Edamam: alternativa verificata, richiede App ID e App Key; per le ricette web standard fornisce ingredienti e URL della fonte, senza procedimento completo; non collegata in questa versione.

Fonti tecniche consultate il 31/10/2026:

- https://www.themealdb.com/api.php
- https://www.themealdb.com/docs_api_guide.php
- https://www.postman.com/spoonacular-api/spoonacular-api/overview
- https://spoonacular.com/food-api/docs
- https://developer.edamam.com/edamam-docs-recipe-api
- https://ai.google.dev/api/generate-content
- https://ai.google.dev/api/models
- https://openrouter.ai/docs/api/reference/overview

## Cosa è stato conservato e segnalato

- Grissini PDF/ODT riuniti con entrambe le fonti.
- Torta di mele: due varianti distinte; quella con mele frullate collega TXT, DOC e ODT.
- “pane diverso”: quattro schede (tortillas, pita, shawarma, naan), ognuna con dose base e dose aggiuntiva per 15 persone. L’intestazione discordante “Per 20 persone” è segnalata.
- “Salsiccia e verza.odt” contiene costine: titolo della scheda basato sul contenuto.
- Maionese: solo ingredienti. Meliga: solo sostituzioni del burro. Non sono stati inventati procedimenti mancanti.
- Note da verificare per acqua/olio focaccia, lievito grissini, pezzatura pizza, unità mancanti dei pani e appunto del sale della polenta.

## PWA e offline

La PWA richiede un sito HTTPS. Dopo la prima apertura completa, interfaccia e archivio possono essere riaperti offline. AI, database esterno e ricerca web richiedono Internet. Installa da Chrome oppure su iPhone da Safari → Condividi → Aggiungi alla schermata Home.

Il file HTML autonomo contiene già stili, codice e dati: può essere aperto direttamente, ma le politiche di salvataggio dei file locali dipendono dal browser. Per un uso stabile preferisci il sito installato ed esporta periodicamente il backup.

Per GitHub Project Pages tutti i percorsi applicativi sono relativi. L’indirizzo sarà `https://PROPRIETARIO.github.io/NOME-REPOSITORY/index.html`. Pubblica → conserva i workflow esistenti; non applicare un secondo generatore PWA al pacchetto già completo. Attenzione: GitHub Pages pubblico rende accessibili anche ricette, introduzione, dedica e testi delle fonti inclusi nel pacchetto. Il sito Sites creato per la consegna mantiene invece accesso privato.

Un aggiornamento ordinario non cancella le modifiche locali. Per passare da una versione pubblicata a un indirizzo nuovo esporta e reimporta il backup. “Controlla aggiornamenti” non ricarica né sovrascrive immediatamente i dati: l’eventuale nuovo service worker si attiva quando chiudi tutte le schede dell’app.

## Verifiche

Copertura di tutti i 23 file e conteggio delle 22 schede; controllo dei 110 prodotti della spesa comunità e dell’archivio per data; controllo sintattico JavaScript; verifica dei pacchetti DOCX/XLSX, del PDF e dello ZIP PWA; nel browser: navigazione, tema, dedica, spesa, cambio giornata, stampa e selezione delle esportazioni. Le chiamate AI richiedono una chiave dell’utente e non sono state provate dal vivo.

by Lollo ®2026
