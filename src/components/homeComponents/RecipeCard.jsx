import { Link } from "react-router-dom"
export default function RecipeCard(props) {
    return <div style = {{ "margin": "20px", "width": "200px", "boxShadow": "0 10px 10px silver" }}>
        <Link to = {"recipe/" + props.recipe.recipe_id}>
            <img src = {props.recipe.image_url} style = {{ "height": "200px", "width": "100%", "objectFit": "cover" }} />
            <div style = {{ "height": "100px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center" }}>
                <p style = {{ "height": "50px", "color": "black" }}>
                    {props.recipe.recipe_name}
                </p>
                <button>
                    See More
                </button>
            </div>
        </Link>
    </div>
}