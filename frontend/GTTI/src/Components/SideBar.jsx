import { Link } from "react-router-dom";

function SideBar () {
    return(
        <div>
            <nav>
                <Link to="/Food">Foods</Link>
                <Link to="/Import">Imports</Link>
                <Link to="/Export">Export</Link>
                <Link to="/Report">Report</Link>
                <Link to="/">Logout</Link>
            </nav>
        </div>
    )
}
export default SideBar;