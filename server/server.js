import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api", (req, res) => {
//   res.json({ users: ["user1", "user2", "user3", "user4", "user5"] });
// });

app.get("/users", (req, res) => {
  res.json("get all users in the bank");
});

app.get("/users:id", (req, res) => {
  res.json("get user with id");
});

app.post("/users:id", (req, res) => {
  console.log(req.params);
  res.json("add user with id");
});
app.delete("/users:id", (req, res) => {
  res.json("delete user with id");
});

mongoose.connect("mongodb://localhost:27017/myBank", () => {
  console.log("hello");
});

app.listen(5000, (error) => {
  if (error) {
    console.log("error");
  }
  console.log("the server is up adm listening to port 5000");
});
