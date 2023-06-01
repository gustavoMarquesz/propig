import { Link } from "react-router-dom"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import NavBarHomePage from "../components/NavBarHomePage";


function LoginForm({ tela }) {
    
    return (
        <section className="home">
            <NavBarHomePage />
            <div className="wrapper">
                    <div className="login-form-2" >
                        <form className="login-form-2">
                            <div className="close-btn">
                                <FaTimes  />
                            </div>
                            <h1>Login</h1>
                            <input id="login" placeholder="CNPJ" className="login-form-2-input" />
                            <input id="password" placeholder="Senha" className="login-form-2-input" type="password" />
                            <div className="son-form">
                                <label>
                                    <input type="checkbox" />
                                    Lembre-me
                                </label>
                                <Link to="">Esqueceu a senha?</Link>
                            </div>
                            { 
                                tela == "cliente" ?  
                                <Link to="/cliente"><input type="submit" className="submit" /></Link> :
                                <Link to="/dashboard"><input type="submit" className="submit" /></Link>
                            }
                        </form>
                    </div >
                </div>

        </section>
    )
}

export default LoginForm