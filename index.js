const express = require("express");
const app = express();
const port = process.env.PORT
const tableRouter = require("./routes/table");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/users", tableRouter);
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});