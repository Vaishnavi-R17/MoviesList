import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";



const Addnewseries = () => {

    const [sname, setSName] = useState("")
    const [hero, setHero] = useState("")
    const [heroine, setHeroine] = useState("")
    const [category, setCategory] = useState("")
    const [imdbRating, setRating] = useState("")
    const [storyLine, setStoryLine] = useState("")
    const [poster, setPoster] = useState("")
    const [trailer, setTrailer] = useState("")


    let history = useHistory();

    let { data: series } = useFetch("http://localhost:4000/series")

    const handleSubmit = (e) => {

        e.preventDefault();//it will prevent the page reload

        let newSeries = { sname, hero, heroine, category, imdbRating, storyLine, poster, trailer }


        fetch("http://localhost:4000/series",
            {
                method: "POST", //what process
                headers: { "Content-Type": "application/json" }, //type of data
                body: JSON.stringify(newSeries) // what data to post
                //stringify-to convert given value into string i.e to a json format
            })
            .then(() => {
                alert("Bravo...!!! Series has been added")
                // history.push("/")//redirect to home page
                history.push(`/seriesDetail${series[series.length - 1].id + 1}`)
            })
    }

    return (
        <div className="new-series">
            <h1>Add New Series</h1>
            <form id="inputs" onSubmit={handleSubmit}>

                <label for="name">Series name:</label><input placeholder="Series name" type="text" value={sname} onChange={(e) => { setSName(e.target.value) }} />
                <label for="hero">Hero:</label><input placeholder="Hero" type="text" value={hero} onChange={(e) => { setHero(e.target.value) }} />
                <label for="heroine">Heroine:</label><input placeholder="Heroine" type="text" value={heroine} onChange={(e) => { setHeroine(e.target.value) }} />
                <label for="category">Genre:</label><input placeholder="Category" type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                <label for="imdb">IMDB Rating:</label><input placeholder="IMDB Rating" type="number" value={imdbRating} onChange={(e) => { setRating(e.target.value) }} />
                <label for="story">Story Line:</label><input placeholder="Story line" type="text" value={storyLine} onChange={(e) => { setStoryLine(e.target.value) }} />
                <label for="poster">Poster:</label><input placeholder="Poster URL" type="url" value={poster} onChange={(e) => { setPoster(e.target.value) }} />
                <label for="trailer">Trailer</label><input placeholder="Trailer URL" type="url" value={trailer} onChange={(e) => { setTrailer(e.target.value) }} />

                <button type="submit" id="addmovie">Add movie</button>
            </form>
        </div>

    );
}

export default Addnewseries;