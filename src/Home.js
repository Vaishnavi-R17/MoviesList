import Serieslist from './Serieslist';
import { useState, useEffect } from 'react'
import useFetch from './useFetch';

const Home = () => {
    // var ratings = 10

    // var [rating, setRating] = useState(8);//returns an array of 2 values, rating-value used in the useState
    //and setRating- function that can be used to change/re-inistialize the rating by passing the required value

    // const changeRating = () => {
    //     setRating(10);//1)setRating to 10 and 2)re-render the component so that the changed value is reflected in the UI
    //     console.log(rating);
    // }

    // return (
    //     <div className="home-content">
    //         <h1>Series : </h1>
    //         <p>Genre : </p>
    //         <p>Ratings : {rating}</p>
    //         <button onClick={changeRating}>Change rating</button>
    //     </div>
    // );


    //-----------------------------------
    //-----PROPS-----
    // const deleteSeries = (id) => {
    //     var newSeries = series.filter((series) => { return series.id != id });
    //     setSeries(newSeries); //re-assigning the newSeries to series to display the updated series list after deleting
    // }
    //-----PROPS-----

    // var [series, setSeries] = useState(
    //     [
    //         {
    //             sname: 'F.R.I.E.N.D.S',
    //             hero: 'David Schwimmer',
    //             heroine: 'Jennifer Aniston',
    //             category: 'Sitcom',
    //             imdbRating: 8.9,
    //             storyLine: 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.',
    //             id: 1

    //         },
    //         {
    //             sname: 'Big Bang Theory',
    //             hero: 'Jim Parsons',
    //             heroine: 'Kaley Cuoco',
    //             category: 'Sitcom',
    //             imdbRating: 8.2,
    //             storyLine: 'The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny.',
    //             id: 2
    //         },
    //         {
    //             sname: 'Vampire Diaries',
    //             hero: 'Ian Somerhalder',
    //             heroine: 'Nina Dobrev',
    //             category: 'Drama',
    //             imdbRating: 7.7,
    //             storyLine: 'On her first day at high school, Elena meets Stefan and immediately feels a connection with him. However, what she does not know is that Stefan and his brother, Damon, are in fact vampires.',
    //             id: 3
    //         },
    //         {
    //             sname: 'Peaky Blinders',
    //             hero: 'Cillian Murphy',
    //             heroine: 'Sophie Rundle',
    //             category: 'British Drama',
    //             imdbRating: 8.8,
    //             storyLine: 'Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.',
    //             id: 4
    //         },
    //         {
    //             sname: 'Lost In Space',
    //             hero: 'Toby Stephens',
    //             heroine: 'Molly Parker',
    //             category: 'Sci-fi',
    //             imdbRating: 7.3,
    //             storyLine: 'Due to unforeseeable circumstances, the Robinsons, a family of space colonists, crash-land on an unknown planet. Now, they must fight for survival and escape, despite the dangers surrounding them.',
    //             id: 5
    //         },
    //         {
    //             sname: 'Locke & Key',
    //             hero: 'Connor Jessup',
    //             heroine: 'Darby Stanchfield',
    //             category: 'Horror fiction',
    //             imdbRating: 7.4,
    //             storyLine: 'Following their father murder, three siblings move into a house filled with reality-bending keys; from the comics by Joe Hill and Gabriel Rodriguez.',
    //             id: 6
    //         }
    //     ]
    // )

    //---------useEffect---------
    // var [series, setSeries] = useState(null)//initial-null
    // var [pending, setPending] = useState(true)//the promise is pending i.e fetch not completed yet, so no data yet
    // var [error, setError] = useState(null);//to display error message when the fetch returns an empty object or gets rejected

    // useEffect(() => {
    //     // fetch("http://localhost:4000/series") //pass the resource to fetch()
    //     //     .then((response) => { return response.json() }) //fetch will be resolved and returns respose object and returns data through json()
    //     //     .then((data) => { setSeries(data) }) //accept data returned by json() and set it to series

    //     setTimeout(() => {
    //         fetch("http://localhost:4000/series")
    //             .then((response) => {
    //                 if (response.ok === false) {//if the fetch is getting wrong resource from json

    //                     throw Error("Data you are trying to fetch is not present");//this will be caught by "catch" and the respective error message will be displayed
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => { setSeries(data) })
    //             // .catch((error) => { console.log(error.message); })// when the json fails to return the resource, the fetch will fail so error object is returned(rejected)

    //             .catch((error) => { setError(error.message) })// if the fetch fails to get json data/rejected i.e json terminal is killed,that error message will be diplayed in browser and not in console

    //         setPending(false); //set pending to false, to indicate that data has been fetched
    //     }, 2000);

    // }, [])
    //---------useEffect---------


    //---------useFetch(custom hook)---------
    //data: series-aliasing data as series
    let { data: series, pending, error } = useFetch("http://localhost:4000/series");//returns object {series,pending,error} and destructuring is used
    //---------useFetch(custom hook)---------


    return (
        <div>
            {/* ------PROPS----- */}
            {/* // sending series array to Serieslist.js file */}
            {/* <Serieslist series={series} title='Series Stack'/> */}
            {/* <Serieslist series={series} title='Series Stack' delete={deleteSeries} /> */}
            {/* <Serieslist series={series.filter((series)=> series.category=='Sitcom')} title='Genre : Sitcom'/>
            <Serieslist series={series.filter((series)=> series.category=='Drama')} title='Genre : Drama'/> */}
            {/* ------PROPS----- */}


            {/* --------useEffect------- */}
            {/* Below when pending is false i.e there is a delay in displaying the data,h1 will be displayed */}
            {pending && <h1 align="center">Breath In...Breath Out...</h1>}
            {error && <h1 align="center">{error}</h1>}
            {series && <Serieslist series={series} title='Series Stack' />}
            {/* --------useEffect------- */}
        </div>
    );


    //------------Login Demo-------------
    //     return (
    //         <div className='Logindemo'>
    //             <h1>Login Form</h1>
    //             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVxJREFUSEvNltFRw0AMRF86IBUAFRA6gAqgBKggUEGgAugAWqACKIEOoANIB8zO2JnkOFurYMbWjz/uoqddy1JmjBSzkbjsC74ETpqi34GXrIAs+Ax4Ao4K0CdwDby5BWTAgr4Gic9duAs+AD4APftCyk+B70i5C75qLI7y6VyWP0cXXfAdsIqSNef3gO73hgt+BJZRsv8A3wAPJvgWUKGDKNbno+aKYg0sADXZIGAlcVRbapXMfcdt9X1NZjVVmygL1u9ku9TLUoVGpt5paO+29/uAo9dnnU8eLFsvGnu7xqbGZLup9PxTVwuo71cLIhPaUurwzgL6rNZ8FjRaDF0FyQHBq3O7C+ysQNeB6qqsgd0V6IKl/LhclTVwZhO58F/DpQbWIDh0M5r3lFOqN1GCZfOXmSx7bb5tdwkesqnKwnaabDJgWd0O/6yV0X0Nk82fwMnP6khN+nw0xT/GNTcfILBjUQAAAABJRU5ErkJggg==" />
    //             <input type="email" placeholder='Email or Phone' /><br />
    //             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAYlJREFUSEvdlo0tBUEUhb/XgQ5QATqgAlSADqgAFSgBFaACVIAKUAEqIEdmNveNa2ZnduQlbvLysj+Zb879ObMzFhSzBXHpDd4EloEX4D4nqgd4CTgHdhzQNXAAvKfPpoLXgStgJaNO0F3gzr4zBSylz4D+Y7wCj2Eja+a+4KtW+RTwBbBnFj8FTsz1IXBmrpV2Kf+OVrBSK7U2tBHV00YKH3itYHXvrVNXD67Ux7RvxVr3BmsvKVwp3g6bVEb0vDnV6uaHTCdbuGZas62YrFid/JYBR+Xq8mPz3qQaC6r6SnVN3FiTqa1xK/QjzPbgYDXgVqjSLTtVdw8xFtwKVXr3W716DPQJ0Gzbus95c9oMJcUl6GXwaldVrvNy4BJUKms7u1jjElQLzI1HzVz95lwl6FFoFlnhjwN+7Aa8VFtv9dbZSEdjLKw0TvY0ie/KAOS5iua6lsCfjgJ1rzq3W6Sp9g54wfTZEhV3gXs1too1Mqq5/aT5M7C6Wr+uCmudq4s6b5GSZf4/8BePmUkfT49o4wAAAABJRU5ErkJggg==" />
    //             <input type="password" placeholder='Password' />
    //             <a href="">Forgot password?</a>
    //             <button>Login</button>
    //             <p>Not a member?</p>
    //             <a href="">Signup now</a>
    //         </div>
    //     )
}

export default Home;

