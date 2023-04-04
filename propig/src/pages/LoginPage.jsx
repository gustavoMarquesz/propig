import loginPage from "../styles/loginPage.css"

import Maquininha2 from "../assets/maquininha-2.webp"

function LoginPage(){

    return(
        <section className="home">
              <div className="login-form">
                <form>
                    <h2>conecte-se</h2>
                    <input className="input" type="email" placeholder="e-mail"/>
                    <input type="password" placeholder="senha"/>
                    <button type="submit">entrar</button>
                    <a className="create-account">adquirir soluções para minha empresa</a>
                </form>

            </div>
           
             <div className="welcome">
                <div className="welcome-text">
                    <div className="texto">
                        <h1 className="h1"><span className="prazer">Prazer,</span> <br/>somos a <span className="propig">Propig</span></h1>
                        <h4>Uma empresa provedora de soluções <br/> que conecta a tecnologia a favor do cliente <br/>
                    para melhores resultados</h4>
                    </div>
                    <div className="box-rastreio">
                        <h5>Acompanhe sua entrega agora mesmo</h5>
                        <form>
                            <label for="codigo">CNPJ:</label>
                            <input type="text" id="codigo" name="codigo" placeholder="Insira o código aqui"/>
                            <button type="submit">🔎</button>
                        </form>
                    </div>
                </div>
                <img className="maquininha"  src={Maquininha2}/>
            </div>

        </section>
    )

}

export default LoginPage