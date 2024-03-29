import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col text-7xl justify-center items-center">
            <h1 className="font-bold">OOPS!!! 404</h1><br />
            <Link to='/'>Go Back Home...</Link>
        </div>
    );
};

export default ErrorPage;