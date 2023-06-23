import React from 'react'
import axios from "axios"
import AdBanner from './AdBanner'
import RecipeCard from "./RecipeCard"
const HomeScreen = () => {  
  let renderer = React.useState({})
  function render() {
    renderer[1]({})
  }
  let input = React.useRef()
  let recipes = React.useState([])
  React.useEffect(function() {
    axios("https://recipes.devmountain.com/recipes").then(function(response) {
      for (let index in response.data) {
        response.data[index].uppercase = response.data[index].recipe_name.toUpperCase()
      }
      console.log(response)
      recipes[1](response.data)
    })
  }, [])
  let results = []
  for (let index in recipes[0]) {
    if (recipes[0][index].uppercase.includes(input.current.value.toUpperCase())) {
      results.push(<RecipeCard key = {index} recipe = {recipes[0][index]} />)
    }
  }
  return (
    <div style = {{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
      <AdBanner />
      <span style = {{ "margin": "20px", "width": "31vw", "borderRadius": "30px", "backgroundColor": "antiquewhite", "color": "peru" }}>
        🔍︎
        <input ref = {input} placeholder = {"Search for a Recipe"} onChange = {render} style = {{ "borderRadius": "30px", "backgroundColor": "antiquewhite", "padding": "10px", "borderStyle": "none" }} />
      </span>
      <div style = {{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "marginBottom": "20px" }}>
        {results}
      </div>
    </div>
  )
}

export default HomeScreen