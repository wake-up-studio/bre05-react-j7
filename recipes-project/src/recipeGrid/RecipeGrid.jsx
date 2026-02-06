import RecipeCard from './RecipeCard.jsx';

const RecipeGrid = (props) =>{
    
    
    return(
        <main className="recipe-grid">
            {props.recipes.map((recipe, i)=> <RecipeCard key={i} recipe={recipe} toDetail={props.toDetail} state={props.state}/>)}
        </main>
    );
};

export default RecipeGrid;