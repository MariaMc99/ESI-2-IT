# Søværn IT — undervisningsportal

En lille lokal undervisningshjemmeside med søværnsinspireret design:
- Præsentationsvisning med emnesider og tastatur-navigation
- Vendespil med IT-begreber
- Holdstyring: tilføj, fjern og omdøb hold
- Cases om phishing og digital sikkerhed med svarmuligheder og point
- Ingen database nødvendig — spiltilstand gemmes lokalt i browseren

## Start på macOS / VS Code

1. Åbn mappen i Visual Studio Code.
2. Opret og aktivér et virtuelt miljø i terminalen:

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Installer Flask:

   ```bash
   pip install -r requirements.txt
   ```

4. Start siden:

   ```bash
   python app.py
   ```

5. Åbn http://127.0.0.1:5000 i browseren.

## Struktur

- `app.py` — lille Flask-server
- `templates/index.html` — sidens indhold
- `static/css/style.css` — design
- `static/js/app.js` — navigation, vendespil, hold og cases

## Tilpasning

- Redigér præsentationspunkterne i `templates/index.html`.
- Redigér `terms` og `cases` øverst i `static/js/app.js` for at tilføje egne begreber og cases.
- Projektet bruger kun Flask som Python-bibliotek. Designet er lavet med almindelig CSS og JavaScript — ingen tunge frontend-biblioteker.
