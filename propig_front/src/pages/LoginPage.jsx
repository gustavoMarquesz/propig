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

import BetterPeformace from "../assets/better.svg"
import Gestao from "../assets/gestao.svg"
import LessPrice from "../assets/lessprice.svg"


function LoginPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isClosed, setIsClosed] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleClose = () =>{
        setIsLoggedIn(false)
    }

    return(
        <section className="home-2">
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
                                    <h1 className="h1"><span className="prazer">Prazer,</span> <br/>somos a PROPIG</h1>
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
                                    <Link to="/client"><input type="submit" className="submit"/></Link>
                                </form>  
                                    </div>
                    }
                </div>

                </div>
                <div className="nothing">
                    <h3 className="benefit">BENEFÍCIOS GARANTIDOS</h3>
                    <div className="figures">
                        <figure>
                            <img className="img-figure" src={Gestao}/>
                            <figcaption>TENHA A GESTÃO FINANCEIRA <br/>SEU NEGÓCIO NUM SÓ LUGAR</figcaption>
                        </figure>


                        <figure>
                            <img className="img-figure"  src={LessPrice}/>
                            <figcaption>AS MELHORES TAXAS DO MERCADO</figcaption>
                        </figure>


                        <figure>
                            <img className="img-figure"  src={BetterPeformace}/>
                            <figcaption>MAIOR PERFOMACE COMERCIAL <br/> E OPERACIONAL</figcaption>
                        </figure>
                    </div>

                    

                </div>
                <div className="area-propigs">
                    <div className="middle-2">
                        <h1 className="span">Lembrando...</h1>
                        <h4>
                            Muito mais que um meio de pagamento seguro, prático e legal.
                            Um sistema de soluções inovadoras que transforma a cadeia de valor do negócio,
                            com impactos positivos na gestão dos estabelecimentos comerciais e
                            benefícios exclusivos para varejistas e consumidores.
                        </h4>

                    </div>
                    
                   
                    

                </div>
        </section>
    )
}


export default LoginPage