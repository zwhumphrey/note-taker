const express = require("express");
const router = require("express").Router();

const NotesDb = require("../db/db.js");

// GET request!
router.get("/notes", function (req, res) {
  NotesDb.getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// POST request!
router.post("/notes", (req, res) => {
  NotesDb.createNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
