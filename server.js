
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("⚽ Bola Pro está funcionando!");
});

app.listen(PORT, () => {
  console.log(`⚽ Bola Pro rodando na porta ${PORT}`);
});node server.
  jsnpm install express
