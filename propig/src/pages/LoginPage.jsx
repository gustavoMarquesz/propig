import loginPage from "../styles/loginPage.css"
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useState } from "react";


import Maquininha2 from "../assets/maquinha.webp"
import Progess from "../assets/progress.svg"
import AdminTimeLine from "../pages/AdminTimeLine"
import Footer from "../components/Footer";
import NavBarHomePage from "../components/NavBarHomePage";
import AdminPage from "./AdminPage";


function LoginPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isClosed, setIsClosed] = useState(false)

    function handleAdmin(event) {
        event.preventDefault(); 
      
        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;
      
        if (login === "admin" && password === "admin") {
          window.location.href = "/admin-dashboard";
        } else {
            alert("Login ou senha inválidos. Tente novamente.");
           
        }
      }

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleClose = () =>{
        setIsLoggedIn(false)
    }

    return(
        <section className="home">
            <NavBarHomePage/>
            <div className="wrapper">
                <div class="custom-shape-divider-bottom-1681331361">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div class="custom-shape-divider-bottom-1681331603">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
                <div>
                    {isLoggedIn == false ?<div>
                        <div className="welcome">
                            <div className="welcome-text">
                                <div className="texto">
                                    <h1 className="h1"><span className="prazer">Prazer,</span> <br/>somos a <span className="propig">PROPIG</span></h1>
                                    <h4>Conectando a tecnologia a favor do cliente <br/>
                                    para melhores resultados</h4>
                                </div>
                                <div className="box-rastreio">
                                    <button onClick={handleLogin} className="submit-2">Acompanhe sua entrega agora mesmo</button>
                                </div>
                            </div>
                            <img className="maquininha2"  src={Progess}/>
                            </div>
                            </div> : <div className="login-form-2">
                                <form className="login-form-2">
                                    <div className="close-btn">
                                        <FaTimes onClick={handleClose}/>
                                    </div>
                                    <h1>Login</h1>
                                    <input id="login" placeholder="CNPJ" className="login-form-2-input"/>
                                    <input id="password" placeholder="Senha" className="login-form-2-input" type="password"/>
                                    <div className="son-form">
                                        <label>
                                            <input type="checkbox"/>
                                            Lembre-me
                                        </label>
                                        <Link to="">Esqueceu a senha?</Link>
                                    </div>
                                    <Link onClick={handleAdmin}><input type="submit" className="submit"/></Link>
                                </form>  
                    </div>
                    }
                </div>

                </div>
            <Footer/>
        </section>
    )
}


export default LoginPage