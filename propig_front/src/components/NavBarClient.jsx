import { useEffect, useState } from "react"
import Logo from "../assets/logo.png"
import ProfileClient from '../assets/profileclient.jpeg'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom"


function NavBarClient(){

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
                    <Link>Olá, Jayne<br/><p>user</p></Link>
                   
                    <div class="profile-photo">
                        <img src={ProfileClient}/>
                    </div>
                   
                </div>
            </div>
            
        </section>
    )

}

export default NavBarClient