import Logo from "../assets/logo.png"
import navBar from "../styles/navBar.css"

function NavBar(){

    return(
        <section className="section-nav">
            <nav className="nav-bar"> 
                <img src={Logo}/>
                <ul className="ul-navbar">
                    <li>Nossas soluções</li>
                    <li>Dúvidas</li>
                    <li>Fale conosco</li>
                    <li>Portal CREDMOURA</li>
                </ul>

            </nav>

        </section>
    )

}

export default NavBar