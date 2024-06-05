import app from "./app.js";

import "dotenv/config";

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server rodando em: http://localhost:${PORT}`)
);
