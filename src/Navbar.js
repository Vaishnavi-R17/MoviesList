import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-content">
            <h1>My Series</h1>
            <div>
                {/* using anchor tag loads the page everytime,that should not happen, so in react we use link component */}
                <Link to="/">Home</Link>
                <Link to="/addNewSeries">Add new series</Link>
            </div>
            <hr></hr>
        </div>
    );
}

export default Navbar;