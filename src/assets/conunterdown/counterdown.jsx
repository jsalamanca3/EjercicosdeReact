import {useState, useEffect} from 'react';

function Conunterdown () {
    //targetSeconds, elapsedSeconds
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function(){
        if (targetSeconds === null) return;

        //targetSeconds tiene un valor
        setElapsedSeconds(0);

        let interval = setInterval(function () {
            setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
        }, 1000);

        return ()=>{
            clearInterval(interval);
        }
    },[targetSeconds]);

    function parseForm(ev) {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
        console.log(seconds);
    }

    if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
        return(
            <div className="div-counterdown">
                <p>¡Terminó el conteo!</p>
                <button onClick={()=> setTargetSeconds(null) }>Reiniciar</button>
            </div>
        )
    }

    if (targetSeconds !== null){
        return(
            <p className="p-conterdown">Faltan {targetSeconds - elapsedSeconds} segundos</p>
        );
    }

    return (
        <div className="div-counterdown">
            <p className='title-presentation'>Este ejercicio tiene como obejtivo realizar un contador de segundos</p>
            <p>¿Cuántos segundos quieres contar?</p>
            <form action="#" onSubmit={ev => parseForm(ev) } className="form-counterdown">
                <input type="number" name="seconds" className='input-counterdown'/>
                <button>Iniciar</button>
            </form>
        </div>
    )
};

export default Conunterdown;