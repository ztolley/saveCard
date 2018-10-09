const router = require("express").Router();

// Waitrose 3D Secure Callback URL
// Accepts a HTTP with a body containing PAYRes
// and payerAuthRequestId, stored in the MD field
// Store them in cache then forward the browser to the page to done page
router.post("/3dscallback", (req, res) => {
  const { PaRes, MD: payerAuthRequestId } = req.body;

  // Store the PARes in cache with the payerAuthRequestId as a lookup

  // Go back to the front end
  res.redirect(
    302,
    "https://local.waitrose.com/ecom/assets/formbuilder.html?done=true"
  );
});

module.exports = router;
