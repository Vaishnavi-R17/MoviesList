import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div id="notfound">
            <h1>404 : Page Not Found</h1>
            <h2>The page that your are looking for is either deleted or moved</h2>
            <Link to="/">Go to homepage</Link>
        </div>
    );
}

export default Notfound;