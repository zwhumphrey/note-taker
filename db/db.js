const fs = require("fs");

const { v4: uuidv4 } = require("uuid");

const util = require("util");

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class NotesDb {
  read() {
    return readNote("db/db.json", "utf8");
  }

  write(note) {
    return writeNote("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((note) => {
      let parseNote = [].concat(JSON.parse(note));
      return parseNote;
    });
  }

  createNote(info) {
    //trying new code to find error
    console.log(info);
    const { title, text } = info;
    if (!title || !text) {
      throw new Error("Both title and text can not be blank");
    }
    const newNote = { title, text, id: uuidv4() };

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNote) => this.write(updatedNote))
      .then(() => newNote);
  }
}

module.exports = new NotesDb();
