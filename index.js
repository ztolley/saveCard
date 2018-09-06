const app = require("express")();
const PORT = process.env.PORT || 5000;

app.post("/verifone/vanguard.aspx", (req, res) =>
  res.redirect(302, `${req.get("Referer")}?done=true`)
);

app.listen(PORT);
