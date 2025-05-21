// server.js

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// 👇 Intentional error: this function is not defined anywhere
crashTheServer();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

