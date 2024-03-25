import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <Link to="/"><button>Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;