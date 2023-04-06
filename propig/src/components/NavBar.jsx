import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import navBar from "../styles/navBar.css"
import { Link, useLocation } from "react-router-dom"

function NavBar(){

    const [expandNavbar, setExpandNavbar] = useState(false)

    const local = useLocation()

    useEffect(()=>{
        setExpandNavbar(false)
    },[local])

    return(
        <section className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavbar((prev)=> !prev)}> <MenuIcon/> </button>
            </div>
            <div className="links">
                <div>
                    <Link className="link" to="/"> <img className="propig-imagem" src={Logo}/> </Link>
                </div>
                <div className="other-links"> 
                    <Link className="link" to="/ainda/não/definido">Nossas soluções</Link>
                    <Link className="link" to="/ainda/não/definido">Dúvidas</Link>
                    <Link className="link" to="/ainda/não/definido">Fale conosco</Link>
                </div>
            </div>
            
        </section>
    )

}

export default NavBar
