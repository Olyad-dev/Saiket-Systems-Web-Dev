const express = require("express");

const bookRoutes = require("./Routes/bookRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
