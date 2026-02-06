const recipesReducer = (state, action) => {
    
    if(action.type === "INIT")
    {
        let newState = Object.assign({}, state, { loading: true });

        return newState;
    }
    
    else if(action.type === "LOADED")
    {
        let newState = Object.assign({}, state, { loading: false, recipes : action.payload });
        return newState;
    }
    
    else if(action.type === "TODETAIL"){
        if(state.grid === true){
            let newState = Object.assign({}, state, {grid : false, recipesUnique: action.recipe});
            
            return newState;
        }
    }
    
    else if(action.type === "TOGRID"){
        if(state.grid===false){
            let newState = Object.assign({}, state, {grid : true, recipesUnique: null});
            return newState;
        }
    }
    
};

export default recipesReducer;