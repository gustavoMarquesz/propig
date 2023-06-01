import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "../styles/timeLine.css"

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { MapsHomeWork } from "@mui/icons-material";
import "react-vertical-timeline-component/style.min.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useLocalStorage from 'use-local-storage'
import { Link } from "react-router-dom"

import adressIcons from "../assets/adressIcons.svg"
import NavBarClient from "../components/NavBarClient";
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';



function TimeLine() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
 
    const toggleMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        <section>
        <NavBarClient />
        <section className="entire-page">
            <div class="container-details" data-theme={theme}>
                    <aside>
                        <div class="top">
                            <div class="logo">
                                <h2 class="text-muted">Cliente</h2>
                            </div>
                            <div class="close" id="close-btn"><span class="material-symbols-sharp">close</span>
                            </div>
                        </div>

                        <div class="sidebar">

                            <button className="toggle-button" onClick={toggleMode}>
                                <span class="material-symbols-sharp">
                                    <TipsAndUpdatesSharpIcon /></span>
                                <p>Mudar tema</p>
                            </button>


                            <a href="">
                                <span class="material-symbols-sharp">
                                    <ReceiptLongSharpIcon /></span>
                                <h3>Pedidos</h3>
                            </a>


                            <Link to='/config'>

                                <span class="material-icons-sharp">
                                    <AccountCircleSharpIcon/>
                                </span>
                                <h3>Meu perfil</h3>
                            </Link>

                            <a href="">
                                <span class="material-icons-sharp">
                                <LogoutSharpIcon/>
                                </span>
                                <h3>Logout</h3>
                            </a>
                        </div>
                    </aside>
            </div>

            <section className="tl">
                <div className="time-line">
                    <div className="timeline-header">
                        <div className="timeline-header-father">
                            <div className="header-element">
                                <h1>DATA</h1>
                            </div>

                            <div className="header-element">
                                <h1>CÓDIGO</h1>
                            </div>

                            <div className="header-element-p">
                                <h1>PRODUTO</h1>
                            </div>
                        </div>

                        <div className="timeline-header-mother">
                            <div className="header-element-mother">
                                <h5>03/04/2023</h5>
                            </div>

                            <div className="header-element-mother">
                                <h5>K5I123KA3KAI09293LN</h5>
                            </div>

                            <div className="header-element-mother">
                                <h5>Maquineta Propig</h5>
                            </div>
                        </div>
                    </div>
                    <div className="vertical">
                        <VerticalTimeline lineColor="#3e497a">
                            <VerticalTimelineElement iconStyle={{ background: "#0d6efd", color: "white" }} icon={<MapsHomeWork />}>
                                <h3>Produto disponível para coleta!</h3>
                                <p>Nota fiscal emitida.</p>
                                <p>Agurdando coleta da transportadora</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement iconStyle={{ background: "#0d6efd", color: "white" }} icon={<LocalShippingIcon />}>
                                <h3>Produto coletado pela transportadora!</h3>
                                <p>Produto coletado com sucesso.</p>
                                <p>Em rota para destino</p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement iconStyle={{ background: "green", color: "white" }} icon={<CheckCircleIcon />}>
                                <h4>Produto entregue!</h4>
                                <h5>recebido: 04/04/2023</h5>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                
                </div>
            </section>   
        </section>
    </section>
    )
}

export default TimeLine