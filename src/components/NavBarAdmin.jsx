import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"
import ProfileUm from '../assets/profile-1.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import navBarAdmin from "../styles/navBarAdmin.css"
import { Link, useLocation } from "react-router-dom"

function NavBarAdmin(){

    const [expandNavbar, setExpandNavbar] = useState(false)

    const local = useLocation()

    useEffect(()=>{
        setExpandNavbar(false)
    },[local])



    return(
        <section className="navbar-admin" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavbar((prev)=> !prev)}> <MenuIcon/> </button>
            </div>
            <div className="links">
                <div>
                    <Link className="link" to="/admin-dashboard"> <img className="propig-imagem" src={Logo}/> </Link>

                </div>
                <div className="other-links">
                    <Link>Olá, Marcos <br/><p>admin</p></Link>
                   
                    <div class="profile-photo">
                        <img src={ProfileUm}/>
                    </div>
                   
                </div>
            </div>
            
        </section>
    )

}

export default NavBarAdmin