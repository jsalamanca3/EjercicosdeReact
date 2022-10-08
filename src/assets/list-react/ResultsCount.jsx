import { useContext } from "react"
import { ItemsContext } from "../contexts/ItemsContext"
import { SearchContext } from "../contexts/SearchContext";

function ResultsCount(){
    const elements = useContext(ItemsContext);
    const {search} = useContext(SearchContext);
    return(
        <p className="p-resultsCount">Se encontron {elements.filter( el => !!el ).length} elementos para la búsqueda '{search}'</p>
    )
}
export default ResultsCount;