import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const Seriesdetail = () => {

    let history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:4000/series/${id}`, { method: "DELETE" })
            .then(() => {
                alert("Series deleted...!!!!!! Sorry for your loss");
                //pushes forward slash to url indicating go back to home page whose path is "/"
                // history.push("/");
                history.goBack();//to previously visited page 
            })
    }

    let { id } = useParams()
    let { data: series, pending, error } = useFetch(`http://localhost:4000/series/${id}`)
    return (
        <div className="series-detail">
            <h1 align="center" id="title">Series Detail Below</h1>
            {pending && <h1 align="center">Breath In...Breath Out...</h1>}
            {error && <h1 align="center">{error}</h1>}
            {series &&
                <div id="detail">
                    <h1>Series : {series.sname}</h1>
                    <img id="poster" src={series.poster}></img>
                    <p><b>Genre</b> : {series.category}</p>
                    <p><b>IMDB Rating</b> : {series.imdbRating}</p>
                    <p><b>Plot</b> : {series.storyLine}</p>
                    <p><b>Trailer Below:</b></p>
                    <iframe width="560" height="315" src={series.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <button onClick={handleDelete}>Delete</button>
                </div>}
        </div>
    );
}

export default Seriesdetail;