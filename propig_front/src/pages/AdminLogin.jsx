
import { Link } from "react-router-dom"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import NavBarHomePage from "../components/NavBarHomePage";



function AdminLogin(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isClosed, setIsClosed] = useState(false)

    const handleClose = () =>{
        setIsLoggedIn(false);
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    return(
        <section className="home">
            <NavBarHomePage/>
            <div className="wrapper">
                <div className="login-form-2">
            
            <form className="login-form-2">
                <div className="close-btn">
                    <Link to="/"><FaTimes/></Link>
                </div>
                <h1>Admin LogIn</h1>
                <input id="login" placeholder="usuário" className="login-form-2-input"/>
                <input id="password" placeholder="senha" className="login-form-2-input" type="password"/>
                <div className="son-form">
                    <label>
                        <input type="checkbox"/>
                        Lembre-me
                    </label>
                    <Link to="">Esqueceu a senha?</Link>
                </div>
                <Link to="/dashboard"><input type="submit" className="submit"/></Link>
            </form>  
                </div>
            </div>
            </section>
    )

}

export default AdminLogin