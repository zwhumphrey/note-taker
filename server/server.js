const express = require("express");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({
    extended: true
}));
app.use(express.static(
    "public"
));

app.listen(PORT, () => {console.log(`Example app listening at http://localhost:${PORT}`);})

