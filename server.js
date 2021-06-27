const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const routes = require("./routes/routes");


const app = express();
app.set("port", process.env.PORT || 3000);
const dbOptions = {
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "library",
};

// midlewares
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());
// Rutas
app.get("/", (req, res) => {
  res.send("Welcon mi app");
});
app.use("/api", routes);

// Server
app.listen(app.get("port"), () => {
  console.log(`Runnig on Port`, app.get("port"));
});
