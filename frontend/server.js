const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Dossier public
app.use(express.static(path.join(__dirname, "public")));

// Route principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log("🚀 Serveur frontend démarré : http://localhost:" + PORT);
});
