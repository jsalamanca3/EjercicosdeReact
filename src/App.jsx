import PresentationCard from './PresentationCard';
import './App.css'
import Counter from './assets/counter/Counter';
import Conunterdown from './assets/conunterdown/counterdown';
import List from './assets/list/List';
import TooltipText from './assets/tooltip/TooltipText';
import AppForm from './assets/form/AppForm';
import ReactList from './assets/list-react/ReactList';
import { SearchProvider } from './assets/contexts/SearchContext';
import { ItemsProvider } from './assets/contexts/ItemsContext';
import NoteList from './assets/notes/NotesList';
import NotesForm from './assets/notes/NotesForm';
import { NotesProvider } from './assets/contexts/NotesContext';



function App() {
  return (
    <div className="App">
      <PresentationCard/>
      <Counter/>
      <Conunterdown/>
      <List/>
      <div className='div-tooltip'>
        <p className="title-presentation">En este ejercicio se añade un tooltip a ciertas palabras del párrafo</p>
        <div className='div-tooltip_text'>
          <p><TooltipText tooltip={"Hola soy un tooltip"}>Lorem Ipsum</TooltipText>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,<TooltipText tooltip={"Texto generado"}>but also the leap into electronic typesetting,</TooltipText> remaining essentially unchanged.It was popularised in the<TooltipText tooltip={"Texto generado"}>1960s</TooltipText>with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <p className="title-presentation">Este ejercicio consite en crear un fomulario de contacto capaz de envíar un correo de contacto</p>
      <AppForm />
      <p className="title-presentation">Este ejercicio consistía en realizar una lista para filtrar elementos, en este caso se usa 'props' de React</p>
      <ReactList />
      <p className="title-presentation">Este ejercicio consiste en una APP para crear notas</p>
      <NotesProvider>
        <NotesForm />
        <NoteList />
      </NotesProvider>
    </div>
  )
}

export default App
