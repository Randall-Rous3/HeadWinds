import { Link } from "react-router-dom";
import '../styles/nav.css'



export default function Nav() {




    return (
        <>
            <div className="navigation-bar">
                <div className="links">
                    <Link className="home" to={'/home'}>HOME</Link>
                    <Link className="about" to={'/about'}>ABOUT</Link>
                    <Link className="collections" to={'/collections'}>COLLECTIONS</Link>
                </div>
            </div>
        </>
    )
}