# Bivy (Arbeitstitel)

Packlisten-App fuer Backpacker, Wanderer und Wildcamper.
Ziel: Ausruestung erfassen, Gewicht im Blick behalten, fuer jede Tour die richtige Liste packen.

> Hinweis: "Bivy" ist bereits ein bestehendes Outdoor-Produkt. Vor einer oeffentlichen Version wird der Name geaendert.

## Kernfeatures (Version 1)

1. Gegenstaende erfassen: Name, Gewicht in Gramm, Kategorie
2. Gesamtgewicht und Gewicht pro Kategorie anzeigen
3. Touren anlegen und Gegenstaende zuordnen
4. Packmodus: Gegenstaende beim Packen abhaken
5. Daten als JSON exportieren und importieren

## Datenmodell

### Category
| Feld | Typ | Beschreibung |
|------|-----|--------------|
| id | Integer | Primaerschluessel |
| name | Text | z.B. Schlafen, Kochen, Kleidung |

### Item
| Feld | Typ | Beschreibung |
|------|-----|--------------|
| id | Integer | Primaerschluessel |
| name | Text | z.B. Schlafsack |
| weight_g | Integer | Gewicht in Gramm |
| category_id | Integer | Fremdschluessel auf Category |
| notes | Text | optional |

### Trip
| Feld | Typ | Beschreibung |
|------|-----|--------------|
| id | Integer | Primaerschluessel |
| name | Text | z.B. West Highland Way |
| start_date | Datum | optional |
| end_date | Datum | optional |
| notes | Text | optional |

### TripItem (Zwischentabelle)
| Feld | Typ | Beschreibung |
|------|-----|--------------|
| trip_id | Integer | Fremdschluessel auf Trip |
| item_id | Integer | Fremdschluessel auf Item |
| quantity | Integer | Anzahl, Standard 1 |
| packed | Boolean | im Packmodus abgehakt |

### Beziehungen
- Ein Item gehoert zu genau einer Category, eine Category hat viele Items (1:n)
- Ein Trip hat viele Items, ein Item kann in vielen Trips sein (n:m ueber TripItem)

## Roadmap

- [x] **Phase 0: Fundament** Repo, README, Datenmodell
- [ ] **Phase 1: Liste im Browser** HTML, CSS, JS, localStorage. Fertig wenn: eigene Ausruestung erfasst
- [ ] **Phase 2: Touren und Packmodus** Fertig wenn: fuer eine echte Tour damit gepackt
- [ ] **Phase 3: Backend und Datenbank** REST API plus SQLite. Fertig wenn: Frontend nur noch ueber die API arbeitet
- [ ] **Phase 4: Deployment** Heimserver, Docker, HTTPS. Fertig wenn: auf dem Handy erreichbar
- [ ] **Phase 5: Erweiterungen** Offline-Modus (PWA), Login, Teilen, Auswertungen
- [ ] **Phase 6: Spots** erst wenn Login und Server laufen

## Ideen-Parkplatz

Neue Ideen kommen hierhin, nicht direkt in den Code.

- Spots fuer Wildcamping teilen (rechtliche Lage und Naturschutz vorher klaeren)
- Gewicht pro Kategorie als Diagramm
- Vorlagen fuer typische Touren (Sommer, Winter, Mehrtagestour)
