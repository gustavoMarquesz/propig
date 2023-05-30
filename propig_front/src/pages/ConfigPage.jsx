import configStyle from '../styles/configPageStyle.css'
import NavBarClient from '../components/NavBarClient'
import ProfileClient from '../assets/profileclient.jpeg'
import { Link } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import CreateIcon from '@mui/icons-material/Create';

function ConfgPage(){
    const [theme, setTheme] = useLocalStorage('theme'? 'dark': 'light')

    const toggleMode = () =>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return(
        <div> 
            <NavBarClient/>
            <div class="container-2"  data-theme={theme}>
                <aside className='asise-2'>
                <div>
                    <div class="logo">

                        <h2 class="text-muted">Cliente</h2>
                    </div>
                    <div class="close" id="close-btn"><span class="material-symbols-sharp">close</span>
                    </div>
                </div>
                <div class="sidebar">
                    
                    <button className="toggle-button" onClick={toggleMode}>
                            <span class="material-symbols-sharp">
                                <TipsAndUpdatesSharpIcon/></span>
                            <p>Mudar tema</p>
                        </button>

                    <Link to="/client">
                        <span class="material-symbols-sharp">
                            </span>
                        <h3>Pedidos</h3>
                    </Link>

                    <a href="configuracoes.html">
                        <span class="material-symbols-sharp">
                        </span>
                            <h3>Meu Perfil</h3>
                    </a>
                    <a href="">
                        <span class="material-symbols-sharp">
                        </span>
                            <h3>Sair</h3>
                    </a>
                </div>
            </aside>
        
            <main class="config">
                        <div class="config-titulo">
                            <h2>Meu Perfil</h2>
                        </div>

                        <div class="config-conteudo">

                            <div class="img-container">
                                <div class="profile">
                                    <div class="profile-picture">
                                        <img src={ProfileClient} id='profile-1'/>
                                        <input type="profile" id="profile-1"/>
                                    </div>
                                    <div id="edit">
                                        <label for="upload">
                                            <CreateIcon className='upload-icon'/>
                                        </label>
                                        <input type="file" id="upload" class="file-input"></input>
                                    </div>
                                </div>
                                </div>
                                <ul>
                                    <h2>Dados pessoais</h2>
                                    </ul>

                                <div className="dados-pessoais">
                                    <label style={{ order: 0 }} htmlFor="nome-da-empresa">nome da empresa:</label>
                                    <input style={{ order: 2 }} type="text" id="nome-da-empresa" name="nome-da-empresa" placeholder="Digite o nome da empresa:" />
                                
                                    <label style={{ order: 1 }} htmlFor="cnpj">CNPJ:</label>
                                    <input style={{ order: 3 }} type="text" id="cnpj" name="cnpj" placeholder="Digite o CNPJ:" />
                                
                                    <label style={{ order: 4 }} htmlFor="telefone">Telefone:</label>
                                    <input style={{ order: 6 }} type="text" id="telefone" name="telefone" placeholder="Digite o telefone:" />
                                
                                    <label style={{ order: 5 }} htmlFor="email">E-mail:</label>
                                    <input style={{ order: 7 }} type="text" id="email" name="email" placeholder="Digite o e-mail:" />
                                </div>
                                
                                <div className="endereco">
                                    <ul>
                                    <h2>Endereços</h2>
                                    </ul>
                                    {/*ESSE ORDER: 0; [É PARA ORGANIZAR A ORDER DE PRECEDENCIA SEM ELES FICA DESORGANIZADO OS LABEL E INPUT ABAXO]*/}
                                    <label style={{ order: 0 }} htmlFor="endereco">CEP:</label>
                                    <input style={{ order: 2 }} type="text" id="endereco" name="endereco" placeholder="Digite o CEP:" />
                                
                                    <label style={{ order: 1 }} htmlFor="bairro">Bairro</label>
                                    <input style={{ order: 3 }} id="bairro" type="text" name="bairro" placeholder="Digite o bairro" required />
                                
                                    <label style={{ order: 4 }} htmlFor="cidade">Cidade</label>
                                    <input style={{ order: 6 }} id="cidade" type="text" name="cidade" placeholder="Digite a cidade:" required />
                                
                                    <label style={{ order: 5 }} htmlFor="estado">Estado</label>
                                    <input style={{ order: 7 }} id="estado" type="text" name="estado" placeholder="Digite o Estado:" required />
                                
                                    <label style={{ order: 8 }} htmlFor="numero-rua">Numero</label>
                                    <input style={{ order: 10 }} id="numero-rua" type="text" name="numero-rua" placeholder="Digite o Nº:" required />
                                
                                    <label style={{ order: 9 }} htmlFor="complemento">Complemento</label>
                                    <input style={{ order: 11 }} id="complemento" type="text" name="complemento" placeholder="Digite um complemento:" required />
                                </div>
                               
                               
                        </div>
                        </main>
                    </div>
            
                
    
        </div>
    )
}

export default ConfgPage