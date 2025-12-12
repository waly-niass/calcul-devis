const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Route simple pour vérifier si le backend marche
app.get("/", (req, res) => {
    res.send("Backend opérationnel !");
});

// Exemple route de calcul (tu ajouteras les vraies après)
app.post("/calcul", (req, res) => {
    const { surface } = req.body;
    const prix = surface * 15000;
    res.json({ total: prix });
});

// DÉMARRAGE SUR LE PORT 5000 (IMPORTANT)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("🚀 Backend API démarré : http://localhost:" + PORT);
});
