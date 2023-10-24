import "./MainPage.css"
import "../../styles/CatalogButton.css"
import "../../styles/RecentPetsButton.css"
import dog from "../../images/dog.png"
import cat from "../../images/cat.png"
import catAndDog from "../../images/catAndDog.png"
import eye from "../../images/eye.png"
import { Link } from "react-router-dom"

function MainPage() {

  return (
    <div>
      <div className="main-page-container">
        <div className="lhs-container">
          <div className="icons-container">
            <img src={dog} className="dog-icon"></img>
            <img src={cat} className="cat-icon"></img>
          </div>
          <div className="text-and-btn-container">
            <h1 className="main-text">Rom's Pet Shelter</h1>
            <h2 className="secondary-text">The right choice</h2>
            <h2 className="secondary-text">when it comes to adoption</h2>
            <nav>
              <Link to="/Catalog"><button className="catalog-btn">Go to catalog</button></Link>
            </nav>
          </div>
        </div>
        <div className="rhs-container">
          <img src={catAndDog} className="cat-and-dog"></img>
        </div>
      </div>
    </div>
  )
}

export default MainPage
