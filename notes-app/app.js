import fs from 'fs'
import {add} from './utils.js'
import yargs from 'yargs'
import * as notes from './notes.js'
// fs.writeFileSync('notes.txt', 'THis is a notes app' )

// fs.appendFileSync('notes.txt', "THIS is appended data to noes app")

// const sum = add(3,6)
// console.log(sum);

import {hideBin} from 'yargs/helpers'
import { notStrictEqual } from 'assert'
 yargs(hideBin(process.argv)).command({
    command:'add',
    describe: 'Add new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler : function (argv){
        // console.log("TITLE : ",argv.title);
        // console.log("BODYY : ",argv.body);
        notes.addNotes(argv.title,argv.body)

    }
 }).parse()

 yargs(hideBin(process.argv)).command({
    command:'remove',
    describe: 'Remove new note',
    builder: {
        title:{
            describe: 'Note Title to remove',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body to remove',
            demandOption:false,
            type:'string'
        }
    },
    handler : function (argv){
        notes.removeNotes(argv.title);   
 }
 }).parse()

 yargs(hideBin(process.argv)).command({
    command:'list',
    describe: 'List new note',
    handler : function (){
        notes.listNotes();
    }
 }).parse()

 yargs(hideBin(process.argv)).command({
    command:'read',
    describe: 'Read new note',
    builder: {
        title:{
            describe: 'Note Title to read',
            demandOption:true,
            type:'string'
        },
    },
    handler : function (argv){
        notes.readNotes(argv.title);    
    }
 }).parse()
// console.log("YARGSSS",yargs.argv)
