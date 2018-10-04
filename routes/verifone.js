const router = require("express").Router();

router.post("/vanguard.aspx", (req, res) =>
  res.redirect(302, `${req.get("Referer")}?done=true`)
);

module.exports = router;
