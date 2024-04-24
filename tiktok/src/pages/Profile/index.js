import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div>
            <h1>Profile page</h1>
            <Link to="/following">Go to Following page</Link>
        </div>
    );
}
