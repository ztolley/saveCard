const router = require("express").Router();

// Waitrose 3D Secure Callback URL
// Accepts a HTTP with a body containing PAYRes.
// The payerAuthRequestId is contained in the url,
// along with a url to forward the browser to
// in order to tell it to close the frame
router.post("/3dscallback", (req, res) => {
  const { payerAuthRequestId, returnURL } = req.query;
  const { PARes } = req.body;

  // Store the payer request id and PARes in redis
  // Redirect browser to page informing the FE we are done
  res.redirect(302, returnURL);
});

module.exports = router;
