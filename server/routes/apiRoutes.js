// const { Router } = require("express");
const router = require("express").Router();
const dbJson = require("/Users/zwhumphrey/Documents/code/coding-bootcamp/week11/note-taker/db/db.json");
const fs = require("fs");
const path = require("path");
const {
  createNote,
} = require("/Users/zwhumphrey/Documents/code/coding-bootcamp/week11/note-taker/db/db");
const getNotes = require("/Users/zwhumphrey/Documents/code/coding-bootcamp/week11/note-taker/db/db");

// const router = Router();

router.get("/notes", (req, res) => {
  getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  console.log("POST api notes");
  const note = createNote(req.body);
  res.json(note);
});

module.exports = router;
