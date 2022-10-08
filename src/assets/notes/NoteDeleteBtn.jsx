import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

function NoteDeleteBtn({id}){
    let { remove} = useContext(NotesContext);
    return(
        <button onClick={ ev => remove(id) } className="btn-remove">Eliminar</button>
    )

}
export default NoteDeleteBtn;