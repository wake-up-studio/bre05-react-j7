import DetailMain from './DetailMain.jsx';
import DetailSidebar from './DetailSidebar.jsx';

const DetailGrid = (props)=>{
    return(
        <div className="detail-grid">
            <DetailMain recipes={props.recipes}/>
            <DetailSidebar recipes={props.recipes}/>
        </div>
    );
};

export default DetailGrid;