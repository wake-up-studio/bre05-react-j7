const DetailSidebar = (props)=>{
    let ingredients = props.recipes.ingredients;
    
    return(
        <aside className="detail-sidebar">
            <div className="info-card">
                <h3>Informations</h3>
                <p><strong>Difficulté :</strong> {props.recipes.difficulty}</p>
                <p><strong>Portions :</strong> {props.recipes.servings} personnes</p>
                <p><strong>Calories :</strong> {props.recipes.caloriesPerServing} kcal / pers.</p>
                <p><strong>Note :</strong> {props.recipes.rating} ⭐ ({props.recipes.reviewCount} avis)</p>
            </div>

            <div className="ingredients-card">
                <h3>Ingrédients</h3>
                <ul className="ingredients-list">
                    {ingredients.map((ingredient, i)=> <li key={i}>{ingredient}</li>)}
                </ul>
            </div>
        </aside>
    );
};

export default DetailSidebar;