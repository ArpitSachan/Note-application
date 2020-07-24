const validator= require('validator');
const chalk= require('chalk');
const notes= require('./notes.js');
const yargs=require('yargs');

// const msg = getNotes();
// console.log(msg);

// console.log(validator.isURL('arpit@gmailcom'));
// console.log(chalk.black.bgRed.inverse.bold('Error!'));

//customize yargs version
// yargs.version('1.1.0')


// console.log(process.argv);

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body:{
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // notes.addNote(argv.title, argv.body);
    notes.addNote(argv.title, argv.body);
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'remove a new note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

//Create list command
yargs.command({
  command: 'list',
  describe: 'List a new note',
  handler() {
    notes.listNotes();
  }
})

//Create read command
yargs.command({
  command: 'read',
  describe: 'read a new note',
  builder:{
    title:{
      describe: 'Note title: ',
      demandOption: true,
      type:'string',
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  }
})



// console.log(yargs.argv); OR
yargs.parse();
