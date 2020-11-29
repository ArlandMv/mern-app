const express = require("express");
const app = express();
/*
const { getUsers } = require("../controlles/index.controller");
const router = require("./routes");
*/
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require("./routes/index"));

app.listen(6000);
console.log("Server on port", 6000);

/*
router.get("/users", getUsers);
router.post("/");

module.exports = router;
*/
