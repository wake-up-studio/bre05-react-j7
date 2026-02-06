const RecipeCard = (props) =>{
    function sum(){
        let sum = 0;
        sum = props.recipe.prepTimeMinutes + props.recipe.cookTimeMinutes;
        return sum;
    }
    
    function changeClass(){
        let changeClass = "";
        
        if(props.recipe.difficulty==="Easy"){
            changeClass = "difficulty easy";
        }
        else if(props.recipe.difficulty==="Medium"){
            changeClass = "difficulty medium";
        }
        return changeClass;
    }
    
    function handleClick(){
        event.preventDefault();
        
        let recipe = props.recipe;
        
        props.toDetail(recipe);
        console.log(props.state);
    }
    
    return(
        <article className="recipe-card">
            <div className="card-image">
                <img src={props.recipe.image} alt={props.recipe.name}></img>
                <span className="badge">{props.recipe.cuisine}</span>
            </div>
            <div className="card-content">
                <h3>{props.recipe.name}</h3>
                <div className="card-meta">
                    <span>⏱ {sum()} in</span>
                    <span>🔥 {props.recipe.caloriesPerServing}kcal</span>
                </div>
                <div className="card-footer">
                    <span className={changeClass()}>{props.recipe.difficulty}</span>
                    <button className="btn-details" onClick={handleClick}>Voir la recette</button>
                </div>
            </div>
        </article>
    );
};

export default RecipeCard;