// import { useState } from 'react'// destructring,importing useState prop/hook/function from react object

import { Link } from "react-router-dom";

const Serieslist = (props) => { //props can be replaced by property name that is "{series}" by using the concenpt of destructuring
    //------PROPS-----
    var series = props.series;
    var title = props.title;
    // var deleteSeries = props.delete;
    //------PROPS-----

    return (
        <div className="home-content">
            {/*------PROPS----- */}
            <h1 align='center' id="title">{title}</h1>
            {/*------PROPS----- */}
            {
                series.map((series) => (
                    <div className="series-list">
                        <Link to={`/seriesDetail${series.id}`}>
                        <h1>Series : {series.sname}</h1>
                        <p>Hero : {series.hero}</p>
                        <p>Heroine : {series.heroine}</p>
                        </Link>
                        {/*------PROPS----- */}
                        {/* <button onClick={() => deleteSeries(series.id)}>Delete</button> */}
                        {/*------PROPS----- */}
                    </div>  
                ))
            }
        </div>
    );
}

export default Serieslist;