import DetailGrid from './DetailGrid.jsx';
import DetailHeader from './DetailHeader.jsx';

const RecipeDetail = (props)=>{
    return(
        <section className="recipe-detail">
            <DetailHeader recipes={props.recipes}/>
            <DetailGrid recipes={props.recipes}/>
        </section>
    );
};

export default RecipeDetail;