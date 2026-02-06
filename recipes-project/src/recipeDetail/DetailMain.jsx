const DetailMain = (props)=>{
            
    return(

        <div className="detail-main">
            <section>
                <h2>Instructions</h2>
                <ol className="instructions-list">
                    {props.recipes.instructions.map((instruction, i)=> <li key={i}>{instruction}</li>)}
                </ol>
            </section>
        </div>
    );
};

export default DetailMain;