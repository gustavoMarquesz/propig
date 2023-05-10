import adminPageStyle from "../styles/adminPageStyle.css"

import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { Link } from "react-router-dom"
import useLocalStorage from 'use-local-storage'

import ProfileUm from "../assets/profile-1.jpg"
import ProfileDois from "../assets/profile-2.jpeg"
import ProfileTres from "../assets/profile-3.jpeg"
import ProfileQuatro from "../assets/profile-4.png"
import Logo from '../assets/logo.png'

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"


import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SellIcon from '@mui/icons-material/Sell';
import MovingIcon from '@mui/icons-material/Moving';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import ReportGmailerrorredSharpIcon from '@mui/icons-material/ReportGmailerrorredSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import NavBarAdmin from "../components/NavBarAdmin";



function AdminPage(){
    const [dataHora, setDataHora] = useState(new Date());
    const [theme, setTheme] = useLocalStorage('theme'? 'dark': 'light')
    let [data, setData] = useState([
        {
          cliente: 'Moura',
          rastreamento:'Aguardando Pagamento',
          pagamento:'Solicitado',
          status:'Pendente',
          data: '25/04/2023'
        },
        {
          cliente: 'FICR',
          rastreamento:'Cancelado',
          pagamento:'Reembolso',
          status:'Cancelado',
          data: '25/04/2023'
        },
        {
          cliente: 'ECCO',
          rastreamento:'8563223413',
          pagamento:'Pago',
          status:'Entregue',
          data: '25/04/2023'
        },
      ]);

    const toggleMode = () =>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
   
    
      const handleSelectOpcao = () => {
        Swal.fire({
          title: 'Novo Item',
          html: '<input id="cliente" class="swal2-input" placeholder="Cliente" required>' +
                '<input id="rastreamento" class="swal2-input" placeholder="Rastreamento" required>' +
                '<input id="data" class="swal2-input" placeholder="Data" type="date" required>'+
                '<select id="status" class="swal2-select" required>'+
                  '<option value="" selected disabled>Selecione o status</option>' +
                  '<option value="Pendente">Pendente</option>' +
                  '<option value="Entregue">Entregue</option>' +
                  '<option value="Cancelado">Cancelado</option>' +
                '</select>' +
                '<select id="pagamento" class="swal2-select" required>' +
                  '<option value="" selected disabled>Selecione o pagamento</option>' +
                  '<option value="Solicitado">Solicitado</option>' +
                  '<option value="Pago">Pago</option>' +
                  '<option value="Reembolso">Reembolso</option>' +
                '</select>',
          focusConfirm: false,
          showConfirmButton: true,
          showCancelButton: true,
          customClass: {
            input: 'my-swal-input',
            confirmButton: 'my-swal-confirm-button'
          },
          preConfirm: () => {
            var cliente = document.getElementById('cliente').value
            var rastreamento = document.getElementById('rastreamento').value
            var pagamento = document.getElementById('pagamento').value
            var status = document.getElementById('status').value
            var data = document.getElementById('data').value
            
            if (!cliente || !rastreamento || !pagamento || !pagamento || !status || !data) {
              Swal.showValidationMessage('Por favor, preencha todos os campos');
            } else {
              const novoItem = {
                cliente: cliente,
                rastreamento: rastreamento,
                pagamento: pagamento,
                status: status,
                data: data,
              };
              Swal.showLoading();
              setTimeout(() => {
                setData(prevData => [...prevData, novoItem]);
                Swal.fire({
                  icon: 'success',
                  title: 'Salvo!',
                  showConfirmButton: false,
                  timer: 1300
                });
              }, 800);
            }
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              icon: 'error',
              title: 'Cancelado!',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
      };
      
      
      
    useEffect(() => {
        const intervalId = setInterval(() => {
        setDataHora(new Date());
        }, 1000); // atualiza a cada 1 segundo

        return () => {
        clearInterval(intervalId);
        };
    }, []);
      
    return(
        <section>
            <NavBarAdmin/>
            <div class="container" data-theme={theme}>
                <aside>
                    <div class="top">
                        <div class="logo">
                            <h2 class="text-muted">ADM</h2>
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

                        <a href="" class="active">
                            <span class="material-symbols-sharp">
                                <PersonOutlineIcon/></span>
                            <h3>Clientes</h3>
                        </a>

                        <a href="">
                            <span class="material-symbols-sharp">
                                <ReceiptLongSharpIcon/></span>
                            <h3>Pedidos</h3>
                        </a>

                        <a href="">
                            <span class="material-symbols-sharp">
                                <InsightsSharpIcon/></span>
                            <h3>Analises</h3>
                        </a>

                        <a href="">
                            <span class="material-symbols-sharp">
                                <MailOutlineSharpIcon/></span>
                            <h3>Mensagens</h3>
                            <span class="message-count">10</span>
                        </a>


                        <a href="">
                            <span class="material-symbols-sharp">
                                <ReportGmailerrorredSharpIcon/></span>
                            <h3>Reportes</h3>
                        </a>

                        <a href="">
                            <span class="material-symbols-sharp">
                                <SettingsIcon/></span>
                            <h3>Configuracoes</h3>
                        </a>

                        <a href="">
                            <span class="material-symbols-sharp">
                                logout</span>
                            <h3>Logout</h3>
                        </a>
                    </div>
                </aside>
            
                <main>
                    <div class="date">
                        <h3>{dataHora.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short', hour12: false }).replace(',', '')}</h3>
                    </div>

                    <div class="insights">
                        <div class="sales">
                            <span class="teste"><SellIcon/></span>
                            <div class="middle">
                                <div class="left">
                                    <h3>Total Vendas</h3>
                                    <h1>R$25,024</h1>
                                </div>
                                <div class="progress">
                                    <svg>
                                        <circle cx='42' cy='29' r='25'></circle>
                                    </svg>
                                    <div class="number">
                                        <p>80%</p>
                                    </div>
                                </div>
                            </div>
                            <small class="text-muted">Últimas 24 Horas</small>
                        </div>
                    
                        <div class="expenses">
                            <span class=""><LocalShippingIcon/></span>
                            <div class="middle">
                                <div class="left">
                                    <h3>Entregas</h3>
                                    <h1>1000</h1>
                                </div>
                                <div class="progress">
                                    <svg>
                                        <circle cx='42' cy='29' r='25'></circle>
                                    </svg>
                                    <div class="number">
                                        <p>70%</p>
                                    </div>
                                </div>
                            </div>
                            <small class="text-muted">Últimas 24 Horas</small>
                        </div>
                    

                        <div class="income">
                            <span class="material-symbols-sharp"><MovingIcon/></span>
                            <div class="middle">
                                <div class="left">
                                    <h3>Rendimento</h3>
                                    <h1>R$250,024</h1>
                                </div>
                                <div class="progress">
                                    <svg>
                                        <circle cx='42' cy='29' r='25'></circle>
                                    </svg>
                                    <div class="number">
                                        <p>60%</p>
                                    </div>
                                </div>
                            </div>
                            <small class="text-muted">Últimas 24 Horas</small>
                        </div>
                    
                    </div>
                
                    <div class="recent-orders">
                        <h2>Pedidos recentes</h2>
                        <div className="research">
                            <input placeholder="Pesquise por CNPJ ou código de rastreio"/>
                            <button>pesquisar</button>
                        </div>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Cliente</th>
                                    <th>Rastreamento</th>
                                    <th>Pagamento</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((index)=> (
                                    <tr key={index}>
                                        <td>{index.data}</td>
                                        <td>{index.cliente}</td>
                                        <td>{index.rastreamento}</td>
                                        <td>{index.pagamento}</td>
                                        {index.status == "Pendente" ?  <td class="warning">{index.status}</td> : ""}
                                        {index.status == "Entregue" ?  <td class="success">{index.status}</td> :""}
                                        {index.status == "Cancelado" ?  <td class="danger">{index.status}</td> : ""}
                                        
                                        <td className="details"><Link to="/acompanhar-pedido">detalhes</Link></td>
                                    </tr>
                                ))}
                            
                            </tbody>           
                        </table>
                        <a href="#">Mostrar Tudo</a>
                    </div>
                </main>
            

                <div class="right">
                    <div class="top">
                        <button id="menu-btn">
                            <span class="material-symbols-sharp">menu</span>
                        </button>
                    </div>
                    <div class="recent-updates">
                        <h2>Atualizações Recentes</h2>
                        <div class="updates">
                            <div class="update">
                                <div class="profile-photo">
                                    <img src={ProfileDois}/>
                                </div>
                                <div class="message">
                                    <p><b>Lucas Matheus</b> Acaba de solicitar o envio da maquineta para a ECCO</p>
                                    <small class="text-muted">Há 2 Minutos</small>
                                </div>
                            </div>

                            <div class="update">
                                <div class="profile-photo">
                                    <img src={ProfileTres}/>
                                </div>
                                <div class="message">
                                    <p><b>Gustavo Marques</b> Acaba de solicitar o envio da maquineta para a Oficina geral e Mercado
                                        bom
                                        Jesus</p>
                                    <small class="text-muted">Há 25 Minutos</small>
                                </div>
                            </div>

                            <div class="update">
                                <div class="profile-photo">
                                    <img src={ProfileQuatro}/>
                                </div>
                                <div class="message">
                                    <p><b>Rafael Santiago</b> Acaba de solicitar o reembolso a FICR</p>
                                    <small class="text-muted">Há 40 Minutos</small>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div class="sales-analytics">
                        <h2>Analise de vendas</h2>
                        <div class="item online">
                            <div class="icon">
                                <span class="material-symbols-sharp">< LocalGroceryStoreSharpIcon/></span>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>Pedidos Online</h3>
                                    <small class="text-muted">Últimas 24 horas</small>
                                </div>
                                <h5 class="success">+40%</h5>
                                <h3>8000</h3>
                            </div>
                        </div>

                        <div class="item offline">
                            <div class="icon">
                                <span class="material-symbols-sharp"><ShoppingBagSharpIcon/></span>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>Pedidos Offline</h3>
                                    <small class="text-muted">Últimas 24 horas</small>
                                </div>
                                <h5 class="danger">-15%</h5>
                                <h3>1000</h3>
                            </div>
                        </div>

                        <div class="item customers">
                            <div class="icon">
                                <span class="material-symbols-sharp"><Person2SharpIcon/></span>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>Grandes Pedidos</h3>
                                    <small class="text-muted">Últimas 24 horas</small>
                                </div>
                                <h5 class="success">+25%</h5>
                                <h3>850</h3>
                            </div>
                        </div>
                        
                        <div class="item add-product" onClick={handleSelectOpcao}>
                            <div className="add-button">
                                <AddCircleSharpIcon/>
                                <p>Adicionar pedido</p>
                            </div>
                        </div>
                     
                    </div>
            </div>

        </div>
        </section>
      
    )
}


export default AdminPage