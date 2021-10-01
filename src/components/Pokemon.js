import axios from "axios";


const Pokemon = (props) => {

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
            .then(res => {
                console.log(res.data.results)
                props.setPokemon(res.data.results)
            }).catch(err => console.log('error: ' +err))
    }

    return (
        <>
            <button onClick={getPokemons}>Get Pokemons</button>
            
            <h3>Pokemons</h3>
                {props.pokemon.length > 0 && props.pokemon.map((p, i) => {
                        return(<p key={i}>{p.name}</p>)
                    })
                }
            
        </>
    )

}

export default Pokemon;