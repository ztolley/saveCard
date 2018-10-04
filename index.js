const express = require("express");
const path = require("path");

const bank = require("./routes/bank");
const verifone = require("./routes/verifone");
const waitrose = require("./routes/waitrose");

const app = express();
const PORT = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/bank", bank);
app.use("/verifone", verifone);
app.use("/waitrose", waitrose);

app.listen(PORT);
