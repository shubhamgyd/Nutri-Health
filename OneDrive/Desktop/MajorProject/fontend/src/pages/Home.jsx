import { Card } from "../components/Card"
import { Navbar } from "../components/Navbar"
import { database } from "../db/database"
export const Home = () => {


  return (
    <div className="home">
      <Navbar />
      <div className="cardContainer">
        {
          database.map(({name, imageUrl, alt}) => (
            <Card key={name} name={name} imageUrl={imageUrl} alt={alt}/>
          ))
        }
      </div>
    </div>
  )
}