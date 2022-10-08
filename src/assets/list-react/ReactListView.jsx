import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import SearchInput from "../form-react/SearchInput";
import ResultsCount from "./ResultsCount";

function ListView() {
    let elements = useContext(ItemsContext);
    return(
        <div className="div-reactListView">
        <SearchInput />
        <ResultsCount />
            <ul>
            {
                elements.map((nombre, index) => nombre && <li key={index}> {nombre}</li>)
            }
            </ul>
        </div>
    );
}

export default ListView;