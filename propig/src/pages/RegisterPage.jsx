
import Maquininha from "../assets/maquinha.webp"
import registerPage from "../styles/registerPage.css"
function RegisterPage(){

    return(
        <section className="home">
             <div className="welcome">
             <img className="maquininha"  src={Maquininha}/>
                <div className="welcome-text-2">
                    <h1>O que oferecemos?</h1>
                    <h5>Muito mais que um meio de pagamento seguro, prático e legal. <br/>
                    Um sistema de soluções inovadoras que transforma a cadea de <br/>
                    valor de negócio, com imactios positivos na gestão dos <br/>
                    estabelecimentos comerciais e benefícios exclusivos para <br/>
                    varejistas e comerciantes</h5>
                    <div className="box-rastreio-dois">
                        <h5>Já adquiriu um de nossos produtos?<br/>Acompanhe sua entrega agora mesmo</h5>
                        <form>
                            <label for="codigo">Código:</label>
                            <input type="text" id="codigo" name="codigo" placeholder="Insira o código aqui"/>
                            <button type="submit">🔎</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="login-form">
                <form>
                    <h4>Você está a um passo de aprimorar seu negócio</h4>
                    <input className="input" type="email" placeholder="e-mail"/>
                    <input type="password" placeholder="senha"/>
                    <input type="password" placeholder="senha"/>
                    <a className="login-account">login</a>
                    <button type="submit">realizar cadastro</button>
                </form>

            </div>
        </section>
    )

}

export default RegisterPage