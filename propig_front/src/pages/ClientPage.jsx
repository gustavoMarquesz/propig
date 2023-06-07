
import { useEffect, useState } from "react"
import Swal from 'sweetalert2';
import { Link } from "react-router-dom"
import useLocalStorage from 'use-local-storage'
import ClientePage from '../styles/clientePageStyle.css'

import ProfileUm from "../assets/profile-1.jpg"
import ProfileDois from "../assets/profile-2.jpeg"
import ProfileTres from "../assets/profile-3.jpeg"
import ProfileQuatro from "../assets/profile-4.png"
import Logo from '../assets/logo.png'
import ProfileClient from '../assets/profileclient.jpeg'
import MenuIcon from '@mui/icons-material/Menu';

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
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import NavBarAdmin from "../components/NavBarAdmin";
import NavBarClient from "../components/NavBarClient";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';



function ClientPage() {
    const [dataHora, setDataHora] = useState(new Date());
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    let [data, setData] = useState([{
        numeroDoPedido: '#254688',
        Rastreamento: '8586223413',
        Previsao: '30/05/2023',
        Status: 'Em trânsito'
    },
    {
        numeroDoPedido: '#254687',
        Rastreamento: 'Cancelado',
        Previsao: 'Reembolso',
        Status: 'Cancelado'

    },
    {
        numeroDoPedido: '#254686',
        Rastreamento: '8563223413',
        Previsao: '15/04/2023',
        Status: 'Entregue'
    },
    {
        numeroDoPedido: '#254685',
        Rastreamento: '6563223413',
        Previsao: '14/04/2023',
        Status: 'Entregue'

    },
    {
        numeroDoPedido: '#254684',
        Rastreamento: '7563223413',
        Previsao: '13/04/2023',
        Status: 'Entregue'
    },
    {
        numeroDoPedido: '#254683',
        Rastreamento: '563228713',
        Previsao: '20/05/2023',
        Status: 'Em trânsito'

    },
    {
        numeroDoPedido: '#254682',
        Rastreamento: '5563223413',
        Previsao: '03/04/2023',
        Status: 'Entregue'

    },
    {
        numeroDoPedido: '#254681',
        Rastreamento: '5564423413',
        Previsao: '05/05/2023',
        Status: 'Em trânsito'

    },
    {
        numeroDoPedido: '#254680',
        Rastreamento: '5463223413',
        Previsao: '04/05/2023',
        Status: 'Em trânsito'
    }])



    const toggleMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };
    const handleLogout = () => {
        Swal.fire({
            title: 'Deseja fazer logout?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/";
            }
        });
    };




    return (
        <section>
            <NavBarClient />
            <div className="container-2" data-theme={theme}>
                <aside>
                    <div className="top">
                        <div className="logo">
                            <h2 className="text-muted">Cliente</h2>
                        </div>
                        <div className="close" id="close-btn">
                            <span class="material-symbols-sharp">close</span>
                        </div>
                    </div>

                    <div className="sidebar">
                        <a onClick={toggleMode}>
                            <span className="material-symbols-sharp">
                                <TipsAndUpdatesSharpIcon />
                            </span>
                            <h3>Mudar tema</h3>
                        </a>

                        <a href="">
                            <span className="material-symbols-sharp">
                                <ReceiptLongSharpIcon />
                            </span>
                            <h3>Pedidos</h3>
                        </a>

                        <Link to="/config">
                            <span className="material-icons-sharp">
                                <AccountCircleSharpIcon />
                            </span>
                            <h3>Meu perfil</h3>
                        </Link>

                        <Link onClick={handleLogout}>
                            <span className="material-icons-sharp">
                                <LogoutSharpIcon />
                            </span>
                            <h3>Sair</h3>
                        </Link>
                    </div>
                </aside>

                <main className="main-cliente">
                    <div className="recent-orders">
                        <h2>Últimos pedidos</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Número do pedido</th>
                                    <th>Rastreamento</th>
                                    <th>Previsão</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((index) => (
                                    <tr key={index}>
                                        <td>{index.numeroDoPedido}</td>
                                        <td>{index.Rastreamento}</td>
                                        <td>{index.Previsao}</td>

                                        {index.Status === "Em trânsito" ? (
                                            <td className="warning">{index.Status}</td>
                                        ) : (
                                            ""
                                        )}
                                        {index.Status === "Entregue" ? (
                                            <td className="success">{index.Status}</td>
                                        ) : (
                                            ""
                                        )}
                                        {index.Status === "Cancelado" ? (
                                            <td className="danger">{index.Status}</td>
                                        ) : (
                                            ""
                                        )}

                                        <td>
                                            {index.Status === "Cancelado" ? (
                                                "detalhes"
                                            ) : (
                                                <Link to="/acompanhar-pedido">detalhes</Link>
                                            )}
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <a href="#">Mostrar Tudo</a>
                    </div>
                </main>

                <div className="right">
                    <div className="top">
                        <button id="menu-btn">
                            <span ><MenuIcon/></span>
                        </button>
                    </div>
                    <div className="recent-updates">
                        <h2>Atualizações Recentes</h2>
                        <div className="updates">
                            <div className="update">
                                <div>
                                    <img className="profile-photo" src={ProfileUm} />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Atualização na entrega:</b> seu pedido está em destino.
                                    </p>
                                    <small class="text-muted">Há 2 Minutos</small>
                                </div>
                            </div>

                            <div className="update">
                                <div>
                                    <img className="profile-photo" src={ProfileUm} />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Atualização na entrega:</b> seu pedido{" "}
                                        <b>código 3456</b> saiu para entrega!
                                    </p>
                                    <small className="text-muted">Há 25 Minutos</small>
                                </div>
                            </div>

                            <div className="update">
                                <div>
                                    <img className="profile-photo"  src={ProfileTres} />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Promoção!</b> solicitação de maquinas sem frete por tempo
                                        limitado!
                                    </p>
                                    <small className="text-muted">Há 40 Minutos</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientPage;