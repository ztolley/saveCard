const router = require("express").Router();
const querystring = require("querystring");

// Test form builder
router.get("/3ds", (req, res, next) => {
  req.body = {
    TermUrl: `http://localhost:5000/waitrose/3dscallback`,
    PaReq: "PAReq",
    MD: "123"
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
    PaRes: "AABBCC"
  });
});

module.exports = router;
