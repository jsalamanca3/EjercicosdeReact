import { ItemsProvider } from '../contexts/ItemsContext';
import { SearchProvider } from '../contexts/SearchContext';
import ReactListView from './ReactListView';

//Prop drilling
// Componenter de Presentación y componentes contenedores

function List() {
    return(
        <SearchProvider>
            <ItemsProvider>
                <ReactListView />
            </ItemsProvider>
        </SearchProvider>
    )
};

export default List;