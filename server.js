const express = require("express");
const app = express();

app.use(express.json());

let approvals = [];

app.get("/", (req, res) => {
  res.send("🔥 HORUS OS RUNNING");
});

app.post("/analyze", (req, res) => {
  const { input } = req.body;

  const result = {
    message: "Horus analyzed successfully",
    input,
  };

  const approval = {
    id: Date.now().toString(),
    input,
    status: "pending",
  };

  approvals.push(approval);

  res.json({
    result,
    approval,
  });
});

app.get("/approvals", (req, res) => {
  res.json(approvals);
});

app.delete("/approvals", (req, res) => {
  approvals = [];
  res.json({ cleared: true });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Horus running on port", PORT);
});
nano package.json
{
  "name": "horus-clean",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
nano Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]

