async function getPokemon(id){
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()
  return data
}

async function Pokemons({params}){
  const pokemon = await getPokemon(params.id)
  console.log(pokemon)
  return(
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={pokemon.sprites.front_default} at={pokemon.name}/>
          </div>
          <div className="card-body text-center">
              <h4>{pokemon.name}</h4>
              <h5>Position: {pokemon.id}</h5>
              <h5>Base Experience: {pokemon.base_experience}</h5>
              <h5>Height: {pokemon.height}</h5>
              <h5>Weight: {pokemon.weight}</h5>              
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pokemons