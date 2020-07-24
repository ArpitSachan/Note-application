const fs = require('fs')
const chalk = require('chalk')

const readNotes = (title) => {
  const notes=loadNotes()

  const note= notes.find((note)=> note.title==title)

  if(note){
    console.log(chalk.bgBlue('title: ' + note.title));
    console.log(chalk.bgBlue('body: '+note.body));
  }else{
    console.log(chalk.bgRed('Note not found!'));
  }
}

const addNote = (title, body)=> {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) =>note.title==title)

  debugger
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(chalk.bgGreen('New note added'));
  } else {
    console.log(chalk.bgRed('Duplicate found!'));
  }
}
const removeNote=(title)=> {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) =>note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen('Note removed'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed('No match found!'));
  }

}
const listNotes=()=>{
  const notes=loadNotes()
  console.log(chalk.bgBlue('Your notes'));
  notes.forEach((note)=>{
    console.log(note.title);
  })
}

const saveNotes = (notes) =>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes= () =>{

  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
}
