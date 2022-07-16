const router = require("express").Router();
const dbJson = require("./db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuidv");
const { workerData } = require("worker_threads");

const readFile = util.promisify(fs.readfile);
const writeFile = util.promisify(fs.writefile);

function read() {
  return readFile("db/db.json", "utf8");
}

function write() {
  return writeFile("db/db.json", JSON.stringify(notes));
}

function getNotes() {
  return read().then((notes) => {
    let parseNotes = [].concat(JSON.parse(notes));
    return parseNotes;
  });
}

function createNote(info) {
  getNotes();
  console.log(getNotes());
  const { title, text } = info;
  const newNote = { title, text, id: uuidv4() };
  console.log(newNote);
  return getNotes()
    .then((notes) => [...notes, newNote])
    .then((updatedNotes) => write(updatedNotes))
    .then(() => newNote);
}

module.exports = {
  createNote,
  getNotes,
};
