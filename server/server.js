import express from "express";
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

app.listen(5000, () => {
  console.log("the server is up adm listening to port 5000");
});
