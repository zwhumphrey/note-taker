//const dbJson = require("./db.json");
const fs = require("fs");
//const path = require("path");
const { v4: uuidv4 } = require("uuid");
//const { workerData } = require("worker_threads");
const util = require("util");

const readNote = util.promisify(fs.readfile);
const writeNote = util.promisify(fs.writefile);

function read() {
  return readNote("db/db.json", "utf8");
}

function write() {
  return writeNote("db/db.json", JSON.stringify(note));
}

function getNotes() {
  return read().then((note) => {
    let parseNote = [].concat(JSON.parse(note));
    return parseNote;
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
