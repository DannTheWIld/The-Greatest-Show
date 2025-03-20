const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(express.json());

let displayData = { text: "", image: "", animation: "fade", players: {}, maxHealth: 5, questions: [], currentQuestionIndex: -1 };

app.post("/update", (req, res) => {
    displayData = req.body;
    fs.writeFileSync("questions.json", JSON.stringify(displayData.questions));
    res.sendStatus(200);
});

app.get("/data", (req, res) => {
    res.json(displayData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000/display.html`);
    console.log('');
    console.log(`Server running at http://localhost:3000/index.html`);
    console.log('');
    console.log("Use https://congenial-memory-5gj5xqg4rqvh4p4q-3000.app.github.dev/display.html if working in GitHub Codespaces.");
    console.log('');
    console.log("Use https://congenial-memory-5gj5xqg4rqvh4p4q-3000.app.github.dev/index.html if working in GitHub Codespaces.");
    console.log('');
    console.log("Press Ctrl+C to stop.");
});
