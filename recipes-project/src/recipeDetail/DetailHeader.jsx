const DetailHeader = (props)=>{
    
    return(
        <div className="detail-header">
            <img src={props.recipes.image} className="detail-hero"></img>
            <div className="detail-title-block">
                <h1>{props.recipes.name}</h1>
                <div className="tags">
                    {props.recipes.tags.map((tag, i)=> <span key={i} className="tag">{tag}</span>)}
                    <span className="tag">{props.recipes.mealType}</span>
                </div>
            </div>
        </div>
    );
};

export default DetailHeader;