const express = require("express");
const router = express.Router();

////////////////////Here the root (/) means inside the <server>/api/whoami/ route/////////////////////////
router.get("/", (req, res) => {
  const headers = req.headers;

  const forwarded = headers["x-forwarded-for"];
  const ipaddress = forwarded
    ? forwarded.split(",")[0]
    : req.connection.remoteAddress;
  const language = headers["accept-language"].split(",")[0];
  const software = headers["user-agent"];
  res.send({
    ipaddress,
    language,
    software
  });
});

module.exports = router;
