import { Routes, Route } from "react-router-dom"
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/homeComponents/HomeScreen"
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"
import DetailScreen from "./components/detailComponents/DetailScreen"
function App() {
  return (
    <div className="App" style = {{ "minHeight": "calc(100vh - 150px)", "fontSize": "20px", "fontFamily": "sans-serif", "position": "relative" }}>
      <Header />
      <Routes>
        <Route path = "" element = {<HomeScreen />} />
        <Route path = "recipe/:id" element = {<DetailScreen />} />
        <Route path = "NewRecipeScreen" element = {<NewRecipeScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
