const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Add a new message" });
});

router.post("/new", function (req, res, next) {
  console.log(
    `Adding new message "${req.body.messageText}" from ${req.body.authorName}`
  );
  messages.push({
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
