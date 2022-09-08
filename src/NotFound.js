import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>PAGE NOT FOUND!</h1>
            <Link to="/">Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;