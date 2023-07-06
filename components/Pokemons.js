"use client"
import { useRouter } from 'next/navigation'

async function getPokemon(url){
  let res = await fetch(url)
  let data = await res.json()  
  let avatar = data.sprites.front_default

  return avatar;
}

async function Pokemons(props){
  const router = useRouter();  
  console.log(props.pokemons)
  let pokemons = props.pokemons
  return(
    <ul className='list-group'>
      <h1 className='text-center'>Pokedex</h1>
      {
        pokemons.map((pokemon) => (          
          <li key={pokemon.id} className='list-group-item list-group-item-action d-flex justify-content-between aling-items-center'
          onClick={() => {router.push(`/pokemons/${pokemon.id}`)
        }}
          >
            <div>
              <h5>{pokemon.name}</h5>
            </div>
            <img src={pokemon.image} alt={pokemon.name} style={{borderRadius: "50%" }}/>
          </li>
        )) 
      }
      </ul>
  )
}
export default Pokemons