import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"

import MenuIcon from '@mui/icons-material/Menu';
import navBar from "../styles/navBar.css"
import { Link, useLocation } from "react-router-dom"

function NavBarHomePage(){

    const [expandNavbar, setExpandNavbar] = useState(false)

    const local = useLocation()

    useEffect(()=>{
        setExpandNavbar(false)
    },[local])

    return(
        <section className="navbar" id={expandNavbar ? "open" : "close"}>s
            <div className="toggleButton">
                <button onClick={() => setExpandNavbar((prev)=> !prev)}> <MenuIcon/> </button>
            </div>
            <div className="links">
                <div>
                    <Link className="link" to="/"> <img className="propig-imagem" src={Logo}/> </Link>
                </div>
                <div className="other-links"> 
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/contact">Fale conosco</Link>
                    <Link className="link" to="/login/admin">Admin</Link>
                </div>
            </div>
            
        </section>
    )

}

export default NavBarHomePage
