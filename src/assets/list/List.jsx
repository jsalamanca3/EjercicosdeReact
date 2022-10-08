import { useState } from 'react';
import frameworksList from './items';
import ListView from './ListView';

// Componenter de Presentación y componentes contenedores

function List() {
    let[items,setItems] = useState(frameworksList);

    function filterItems(searchPattern){
        if(searchPattern === ""){
            setItems(frameworksList);
        }else{
            let newItems = filterItemsBySearchPatter(searchPattern);
            setItems(newItems);
        }
    }
    function filterItemsBySearchPatter(searchPattern){
        let filterItems = frameworksList.map( item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null);
        return filterItems;
    }

    return(
        <ListView elements={items} funcFilterItems={filterItems} />
    )
};

export default List;