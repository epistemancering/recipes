import React from "react";
import axios from "axios"
import { Formik } from "formik"
let initialValues = { "recipeName": "", "imageURL": "", "type": "", "prepTime": "", "cookTime": "", "serves": "", "ingredients": [], "instructions": "" }
let list = []
const NewRecipeScreen = () => {
  let addIngredient = (event) => {
    list = [...list, <li key = {list.length}>
      {quantity[0]} {name[0]}
    </li>]
    event.target.innerHTML = "Add Another"
    setIngredients([...ingredients, { "name": name[0], "quantity": quantity[0] }])
    name[1]("")
    quantity[1]("")
  }
  let onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values)
    axios.post("https://recipes.devmountain.com/recipes", values)
  }
  let name = React.useState("")
  let quantity = React.useState("")
  let [ingredients, setIngredients] = React.useState([])
  return (
    <section style = {{ "padding": "20px" }}>
      <h1 style = {{ "margin": "20px", "textAlign": "center", "fontSize": "30px" }}>Tell us about your Recipe!</h1>
      <Formik initialValues = {initialValues} onSubmit = {onSubmit}>
        {function(formik) {
          return <form onSubmit = {formik.handleSubmit} style = {{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
            <div style = {{ "width": "450px", "display": "flex", "justifyContent": "space-between" }}>
              <input placeholder = {"Name"} name = {"recipeName"} onChange = {formik.handleChange} value = {formik.values.recipeName} style = {{ "margin": "10px", "width": "180px", "padding": "5px" }} />
              <input placeholder = {"Image URL"} name = {"imageURL"} onChange = {formik.handleChange} value = {formik.values.imageURL} style = {{ "margin": "10px", "width": "180px", "padding": "5px" }} />
            </div>
            <div style = {{ "width": "450px", "display": "flex", "justifyContent": "space-around" }}>
              <label style = {{ "display": "flex", "alignItems": "center" }}>
                <input type = {"radio"} name = {"type"} value = {"Cook"} onChange = {formik.handleChange} style = {{ "margin": "10px", "height": "30px", "width": "30px" }} />
                Cook
              </label>
              <label style = {{ "display": "flex", "alignItems": "center" }}>
                <input type = {"radio"} name = {"type"} value = {"Bake"} onChange = {formik.handleChange} style = {{ "margin": "10px", "height": "30px", "width": "30px" }} />
                Bake
              </label>
              <label style = {{ "display": "flex", "alignItems": "center" }}>
                <input type = {"radio"} name = {"type"} value = {"Drink"} onChange = {formik.handleChange} style = {{ "margin": "10px", "height": "30px", "width": "30px" }} />
                Drink
              </label>
            </div>
            <div>
              <input placeholder = {"Prep Time"} name = {"prepTime"} onChange = {formik.handleChange} value = {formik.values.prepTime} style = {{ "margin": "10px", "width": "116px", "padding": "5px" }} />
              <input placeholder = {"Cook Time"} name = {"cookTime"} onChange = {formik.handleChange} value = {formik.values.cookTime} style = {{ "margin": "10px", "width": "116px", "padding": "5px" }} />
              <input placeholder = {"Serves"} name = {"serves"} onChange = {formik.handleChange} value = {formik.values.serves} style = {{ "margin": "10px", "width": "116px", "padding": "5px" }} />
            </div>
            <div style = {{ "width": "450px", "display": "flex" }}>
              <div>
                <input placeholder = {"Ingredient"} onChange = {function(event) {
                  name[1](event.target.value)
                }} value = {name[0]} style = {{ "margin": "10px", "width": "180px", "padding": "5px" }} />
                <input placeholder = {"Quantity"} onChange = {function(event) {
                  quantity[1](event.target.value)
                }} value = {quantity[0]} style = {{ "margin": "10px", "width": "180px", "padding": "5px" }} />
              </div>
              <ul style = {{ "margin": "10px", "width": "180px", "padding": "5px" }}>
                {list}
              </ul>
            </div>
            <button type = {"button"} onClick = {addIngredient} style = {{ "margin": "10px", "width": "160px", "backgroundColor": "peru" }}>
              Add Ingredient
            </button>
            <textarea placeholder = {"What are the instructions?"} name = {"instructions"} onChange = {formik.handleChange} value = {formik.values.instructions} style = {{ "margin": "10px", "height": "100px", "width": "418px", "resize": "none", "padding": "5px", "fontSize": "20px", "fontFamily": "sans-serif" }} />
            <button type = {"submit"} style = {{ "margin": "10px", "width": "160px" }}>
              Save
            </button>
          </form>
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
