import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css'



export default function Nav() {

    useEffect((e) => {
    })

    const clickHandle = (e) => {
        e.preventDefault()
        alert('clicked')
    }



    return (
        <>
            <div className="navigation-bar">
                <button onClick={clickHandle}/>
                <div className="links">
                    <Link className="home" to={'/home'}>HOME</Link>
                    <Link className="about" to={'/about'}>ABOUT</Link>
                    <Link className="collections" to={'/collections'}>COLLECTIONS</Link>
                </div>
            </div>
        </>
    )
}