import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Note from "./Note";

function NotesList() {
    const { notes } = useContext(NotesContext);
    return(
        <div style={{display: "grid", justifyitems: "center"}}>
        <p style={{ textAlign: "right"}}>Tienes {notes.length} notas guardadas</p>
            {
                notes.map(note => <Note key={note.id} id={note.id} title={note.title} message={note.message} />)
            }
        </div>
    )

}

export default NotesList;