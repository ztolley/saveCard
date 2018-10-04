const router = require("express").Router();
const querystring = require("querystring");

// Test form builder
router.get("/3ds", (req, res, next) => {
  const params = querystring.stringify({
    payerAuthRequestId: 1234,
    returnURL: "https://local.waitrose.com/verifone/vanguard.aspx?done=true"
  });

  req.body = {
    TermURL: `http://localhost:5000/waitrose/3dscallback?${params}`,
    PAReq: "PAReq"
  };
  next();
});

// 3D Secure form
router.use("/3ds", (req, res) => {
  res.render("bank/3ds", { ...req.body });
});

// 3D secure authentication processor
router.post("/auth", (req, res) => {
  res.render("bank/ok", {
    ...req.body,
    PARes: "AABBCC"
  });
});

module.exports = router;
