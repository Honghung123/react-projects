import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/following">Go to Following page</Link>
            <Link to="/upload">Go to Upload page</Link>
            <Link to="/profile">Go to profile page</Link>
            <Link to="/search">Go to Search page</Link>
        </div>
    );
}
