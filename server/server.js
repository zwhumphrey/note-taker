const express = require("express");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  express.json({
    extended: true,
  })
);
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app.use("/notes", apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
