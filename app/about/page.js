import Link from "next/link"

function About(){
  return(
    <div className="container col-md-10">
      <h1 className="text-center">About Pokemon Api</h1>
      <p>Pokemon API showing the first 20 Pokemon of the Pokemon game.</p>
      <p>This is the API URL: <Link href="https://pokeapi.co/api/v2/pokemon/">Pokemon API</Link></p> 
    </div>
  )
}
export default About