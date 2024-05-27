import app from "./app.js";

import "dotenv/config";

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Servidor rodando...",
  });
});

app.listen(PORT, () =>
  console.log(`Server rodando em: http://localhost:${PORT}`)
);
