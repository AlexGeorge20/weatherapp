import fs from 'fs'
import chalk from 'chalk'
export const getNotes= ()=>{
    return 'Your notes...'
}
export const addNotes=  (title,body)=>{
    const notes=loadNotes()
    const duplicateNotes= notes.filter((note)=>{
        return note.title === title
    })
    const duplicatenote = notes.find((note)=>{
        return note.title === title
    })

    if(!duplicatenote){
    notes.push({
        title: title,
        body : body
    })
    saveNotes(notes)
    console.log("NEW Note added");

}else{
    console.log("DUPLICATe present");
}

}

export const removeNotes = (title)=> {
    console.log("REMOVE NOTE fn",title);
    const notes=loadNotes();
    const filterNotes= notes.filter((note)=>{
        return note.title !== title
    })
    if(notes.length> filterNotes.length){
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(filterNotes)


    }else{
        console.log(chalk.red.inverse('Note not removed!'));

    }


}

export const saveNotes=(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

export const loadNotes=()=>{
    try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

export const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note)=>{
        console.log("NOTEs",note.title);
    })


}

export const readNotes=(title)=>{
    const notes=loadNotes();
        debugger
    let titleExist=notes.filter((note)=>{
        return note.title === title
    })
    if(titleExist.length > 0){
        console.log("EXISTS" + " "+ titleExist[0].title + " "+ titleExist[0].body);
    }else{
        console.log(chalk.red.inverse('No note found!'));
    }



}

