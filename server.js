const geo2ip = require("./utils/geo2ip").default;
const express = require("express");

const app = express();

app.set("PORT", 3000);

app.use("/statics", express.static("public"));

app.get("/ip/:ip", async (req, res) => {
  const ip = req.params.ip;
  try {
    const ipLocation = await geo2ip(ip);
    res.status(200).json({
      status: true,
      ip,
      country: ipLocation
    });
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(app.get("PORT"), () => {
  console.log(`Server is running already in ${app.get("PORT")}`);
});
