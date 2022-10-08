import imagenAvatar from './assets/731510.png';
import './PresentationCard.css';


function PresentationCard() {
    let name= 'Julián';
    return (
        <div className="presentation-card">
        <img src={imagenAvatar} alt="Avatar" className="Avatar"/>
            <h1 className="title_name">
                Hola, soy { name } y estoy aprendiendo React
            </h1>
        </div>
    );
}
export default PresentationCard;