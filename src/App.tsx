import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import AdoptionPage from "./pages/AdoptionPage/AdoptionPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Catalog' element={<CatalogPage />} />
        <Route path='/Adoption' element={<AdoptionPage />} />
      </Routes>
    </Router>
  )
}

export default App
