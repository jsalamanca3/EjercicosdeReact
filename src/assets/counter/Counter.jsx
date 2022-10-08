import { useState } from 'React';

function Counter(){
    //El estado
    const [contador, setContador] = useState(0);
    return(
        <div className="div-counter">
        <p className='title-presentation'>Este ejercicio tiene como objetivo crear un contador</p>
        <p>
            Haz hecho clic {contador} veces a este botón
        </p>
        <button onClick={ ()=>{ setContador(contador + 1) } } >Incrementar</button>
        </div>
    );
}
export default Counter;