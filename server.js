const express = require("express");
const path = require("path");
const app = express();

// Den `dist`-Ordner als statischen Ordner festlegen
app.use(express.static(path.join(__dirname, "dist")));

// Alle anderen Routen zu `index.html` weiterleiten (für React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
