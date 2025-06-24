# Amazon Webscraper mit Puppeteer

Dieses Projekt ist ein einfacher Webscraper, der mit [Puppeteer](https://pptr.dev/) entwickelt wurde. Ziel war es, automatisiert **Titel**, **Preis** und **Produktbild** eines bestimmten Amazon-Produkts zu extrahieren.

---

##  Technologien

- Node.js  
- Puppeteer  
- JavaScript 

---

##  Ziel des Projekts

Das Projekt dient als technische Übung, um:

- grundlegende Kenntnisse in der Webautomatisierung mit Puppeteer zu erlernen,
- erste praktische Erfahrungen mit asynchronem JavaScript zu sammeln,
- einfache Webdaten strukturiert auszulesen und weiterzuverarbeiten.

---

##  Setup & Ausführung

### Voraussetzungen:

- [Node.js](https://nodejs.org/) installiert
- Internetverbindung (Amazon-Scraping erfolgt live)

### Installation:

```bash
git clone https://github.com/SametTaskin98/Puppeteer.git
cd Puppeteer
npm install
```

##  Ablauf – Schritt für Schritt

###  Schritt 1: Name der csv eintragen

![Name eingetragen](./screenshots (for readme)/1.PNG)

In Zeile 66 sollte zunächst ein Name für die CSV-Datei eingetragen werden – zum Beispiel "beliebigerName.csv"
Die URL kann bei Bedarf in Zeile 22 angepasst werden – sie sollte jedoch weiterhin eine Amazon-Seite bleiben.

---

###  Schritt 2: Start des Skriptes

Mit dem Befehl
```bash
node index.js

```
kannst du das Skript starten. Danach öffnet sich automatisch ein Browser, der die Amazon-Seite aufruft. Das Skript navigiert dann selbstständig durch alle Seiten, bis die letzte erreicht ist.

---

###   Schritt 3: Daten werden extrahiert

![Extraktion](./screenshots (for readme)/3.PNG)

Pro Seite werden in diesem Fall 61 Objekte extrahiert. Sobald das Skript eine neue Seite geladen hat, beginnt die Extraktion erneut. Am Ende wird die Gesamtanzahl der extrahierten Objekte in der Konsole ausgegeben.

---

### Schritt 4: Speichern der Daten in einer CSV-Datei

Die extrahierten Daten werden automatisch in der Datei `beliebigerName.csv` gespeichert. Die Datei enthält alle erfassten Produktinformationen.

![CSV-Datei](./screenshots (for readme)/4.PNG)


