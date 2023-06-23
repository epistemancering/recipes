import React from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
let ingredients
let instructions
const DetailScreen = () => {  
  let { id } = useParams()
  let recipe = React.useState({ "data": false })
  React.useEffect(function() {
    axios("https://recipes.devmountain.com/recipes/" + id).then(function(response) {
      ingredients = []
      for (let index in response.data.ingredients) {
        ingredients.push(<h4 key = {index}>
          {response.data.ingredients[index].quantity} {response.data.ingredients[index].ingredient}
        </h4>)
      }
      instructions = JSON.parse(response.data.instructions)
      recipe[1](response)
    })
  }, [])
  return (
    <section style = {{ "paddingBottom": "50px", "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
      <div style = {{ "height": "400px", "width": "100%", "position": "relative", "display": "flex", "justifyContent": "center", "alignItems": "center", "fontSize": "60px", "color": "peru" }}>
        <img src = {recipe[0].data.image_url} style = {{ "position": "absolute", "zIndex": -1, "height": "100%", "width": "100%", "filter": "brightness(.2)", "objectFit": "cover" }} />
        {recipe[0].data.recipe_name}
      </div>
      <div style = {{ "width": "79vw", "display": "flex", "justifyContent": "space-evenly", "alignItems": "flex-start" }}>
        <div style = {{ "width": "23vw", "padding": "10px", "boxShadow": "0 10px 10px silver" }}>
          <div style = {{ "paddingBottom": "20px" }}>
            <h1 style = {{ "padding": "20px", "textAlign": "center", "fontSize": "30px" }}>
              Recipe
            </h1>
            <h4>
              Prep Time: {recipe[0].data.prep_time}
            </h4>
            <h4>
              Cook Time: {recipe[0].data.cook_time}
            </h4>
            <h4>
              Serves: {recipe[0].data.serves}
            </h4>
          </div>
          <div style = {{ "paddingBottom": "20px" }}>
            <h1 style = {{ "padding": "20px", "textAlign": "center", "fontSize": "30px" }}>
              Ingredients
            </h1>
            {ingredients}
          </div>
        </div>
        <div style = {{ "width": "35vw", "padding": "20px", "boxShadow": "0 10px 10px silver" }}>
          <h1 style = {{ "padding": "10px", "textAlign": "center", "fontSize": "30px" }}>
            Instructions
          </h1>
          <p style = {{ "padding": "10px", "whiteSpace": "pre-wrap" }}>
            {instructions}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
