import Pokemons from "@/components/Pokemons";

async function PokemonsFetch(){
  let res = await fetch("https://pokeapi.co/api/v2/pokemon/")
  let json = await res.json()
  let pokemones = json.results
  return pokemones;
}

async function GetPokemons(pokemos){
  let array = []
  await Promise.all(pokemos.map(async pokemon => {
    let res = await fetch(pokemon.url)
    let json = await res.json()
    let poke = {
      id: json.id,
      name: json.name,
      image: json.sprites.front_default,
     }
     array.push(poke)
  }));
  return array;
}

async function IndexPage(){

  const arrayPokemons = await PokemonsFetch()
  const pokemons = await GetPokemons(arrayPokemons)

  return(
    <div>
      <Pokemons pokemons={pokemons}/>
    </div>
  )
}
export default IndexPage