import './App.css';
import {useReducer, useEffect} from 'react';
import recipesReducer from './RecipeReducer.js';
import RecipeGrid from './recipeGrid/RecipeGrid.jsx';
import RecipeDetail from './recipeDetail/RecipeDetail.jsx';

function App() {
  const [state, dispatch] = useReducer(recipesReducer, {recipes: [], loading: false, grid: true});

  useEffect(() => {
  
      const fetchRecipes = async () => {
          dispatch({ type: 'INIT' });
  
          const response = await fetch('https://dummyjson.com/recipes?limit=9');
          const result = await response.json();
          dispatch({ type: "LOADED", payload: result.recipes });
      };
      
      fetchRecipes();
  }, []);
  
  function toGrid(){
    dispatch({type: "TOGRID"});
  }
  
  function toDetail(recipe){
    dispatch({type: "TODETAIL", recipe: recipe});
  }
  
  function handleClick(){
    toGrid();
  }
  
  if(state.grid===true){
    return (
      <>
        <div className="container">
          <header className="header">
              <h1>Nos Recettes Gourmandes</h1>
              <p>Découvrez des plats savoureux pour toutes les occasions.</p>
          </header>
          
          <RecipeGrid recipes={state.recipes} toDetail={toDetail} state={state}/>
        </div>
      </>
    )
  }
  else if(state.grid===false){
    return (
      <>
        <div className="container">
          <button className="btn-back" onClick={handleClick}>← Retour à la liste</button>
          <RecipeDetail recipes={state.recipesUnique}/>
        </div>
      </>
    )
  }
}

export default App;