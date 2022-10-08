function ListView({elements, funcFilterItems}) {
    return(
        <div className="div-listview">
        <p className="title-presentation">Este ejercicio tiene como objetivo crear una lista para filtrar</p>
        <input type="text" onChange={ ev => funcFilterItems(ev.target.value) } className="input-listview" />
            <ul>
            {
                elements.map((nombre, index) => nombre && <li key={index}> {nombre}</li>)
            }
            </ul>
        </div>
    );
}

export default ListView;