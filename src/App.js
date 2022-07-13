import Navbar from "./Navbar.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Addnewseries from "./Addnewseries.js";
import Seriesdetail from "./Seriesdetail.js";
import Notfound from "./Notfound.js";


function App() {

  // var a = "Its the App.js returning this h1 tag and color is applied in index.css"
  // var a = 10
  // var a = true //Cannot display boolean in HTML
  // var a = [1, 2, 3, 4, 5]
  // var a = { a: 1, b: 2, c: 3 } //cannot access the whole object but the properties can be accessed
  // we can access values, keys.

  // const b = () => {
  //   alert('Hey you clicked it right!!!!')
  // }


  return (
    <Router>
      <div className="App">
        {/* accessing values of object  */}
        {/* <h1>{Object.values(a)}</h1> */}
        {/* <h1>{a}</h1>
      <p>Paragraph in the home content</p>

      <button onClick={b}>Click</button> */}

        {/* Navbar will be fixed */}
        <Navbar />


        {/* Home and Addnewseries will keep on switching based on url/href in 'a' tag in Navbar.js */}
        <Switch>
          {/* Route is used to define when the components should be mounted */}

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/addNewSeries">
            <Addnewseries />
          </Route>

          {/* the id parameter will be called/fetched by using a hook called useParams() in the calling component i.e Seriesdetail.js*/}
          <Route path="/seriesDetail:id">
            <Seriesdetail />
          </Route>


          <Route path="*">
            <Notfound />
          </Route>

        </Switch>

        {/* <Home/> */}

      </div>
    </Router>
  );
}

export default App;
