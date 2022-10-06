import { Link, Navigate } from "react-router-dom";
import Dropdown from "react-dropdown"
import '../styles/nav.css'



export default function Nav() {

const handleChange = (e) => {
    Navigate('/')
}


    return (
        <>
            <div className="navigation-bar">
                <div className="links">
                    <Link className="home" to={'/home'}>HOME</Link>
                    <Link className="about" to={'/about'}>ABOUT</Link>
                    <Link className="collections" to={'/collections'}>Collections</Link>
            
                </div>
            </div>
        </>
    )
}