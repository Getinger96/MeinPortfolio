# Portfolio – Erich Getinger

Persönliches Portfolio als Frontend Entwickler, gebaut mit Angular. Zeigt Projekte, Skills und Kontaktmöglichkeiten.

**Live:** [erich-getinger.com](https://erich-getinger.com)

## Screenshot

<!-- Screenshot der Startseite hier einfügen, z.B. den Above-the-fold-Bereich -->

## Features

- Zweisprachig (Deutsch/Englisch), Umschaltung per Klick, Speicherung in `localStorage`
- Projektübersicht mit Live-Demo- und GitHub-Links
- Kontaktformular mit PHP-Mail-Backend
- Scroll-Animationen via [AOS](https://michalsnik.github.io/aos/)

## Tech-Stack

- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- AOS (Animate On Scroll)

## Projektstruktur

```
src/app/
├── nav-bar/          # Navigation mit Sprachumschaltung
├── main-content/
│   ├── above-the-fold/
│   ├── why-me/
│   ├── my-skills/
│   ├── my-projects/
│   └── contact-me/
├── footer/
├── porfolio.service.ts   # Zustand: Sprache, Menü-Overlay
└── sendMail.php          # Server-seitiges Mail-Skript für das Kontaktformular
```

## Lokal starten

Voraussetzung: Node.js und Angular CLI installiert.

```bash
npm install
ng serve
```

Aufrufbar unter `http://localhost:4200`.

## Build

```bash
ng build
```

Ergebnis liegt im `dist/`-Ordner.

## Kontakt

- E-Mail: erich.getinger@outlook.de
- LinkedIn: https://www.linkedin.com/in/erich-getinger-45536a255/
