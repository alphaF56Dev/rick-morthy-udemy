export default function Characters(props){
    const {characters, setCharacters} = props; //con esto se le indica que traiga los personajes de los props
    //a traves del useState, se reuytiliza la funcion "setCharacters" definida en "App.js"
    //y permite ser usada en este apartado.
    const resetChars = () => {
        console.log("reseteando pesonajes");
        setCharacters(null);
    }

    console.log(characters);
    return <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetChars}>Inicio</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                //los parentesis indican un return implicito.
                //con el uso de llaves, se deberia usar un return, lo cual se llama retuyrn explicito.
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>{character.status === "Alive" ? (
                            <>
                                <span className="alive"/>
                                Alive
                            </>
                            ) : 
                            (
                                <>
                                    <span className="dead"/>
                                    Dead
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            )) }
        </div>
        <span className="back-home" onClick={resetChars}>Inicio</span>
    </div>
}