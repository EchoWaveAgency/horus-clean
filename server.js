const express = require("express");
const app = express();

app.use(express.json());

// Root test
app.get("/", (req, res) => {
  res.send("HORUS OS Backend is Running 🚀");
});

// Test API
app.get("/api/test", (req, res) => {
  res.json({
    status: "ok",
    message: "Horus is alive 🔥"
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
