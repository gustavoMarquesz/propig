import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import timeLine from "../styles/timeLine.css"

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { MapsHomeWork } from "@mui/icons-material";
import "react-vertical-timeline-component/style.min.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import adressIcons from "../assets/adressIcons.svg"

function TimeLine(){
    return(
        <section className="tl">
            {/*<div className="div-img">
                <img src={adressIcons}/>
                <a>voltar a navegar</a>
            </div>*/}
           <div className="time-line"> 
            <h1>Acompanhe a trajetória do seu produto</h1>
            <h1><span>PROPIG</span></h1>
            <VerticalTimeline  lineColor="#3e497a">
                    <VerticalTimelineElement iconStyle={{background: "#0d6efd", color: "white"}} icon={<MapsHomeWork/>}>
                        <h3>Produto disponível para coleta!</h3>
                        <p>Nota fiscal emitida.</p>
                        <p>Agurdando coleta da transportadora</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement iconStyle={{background: "#0d6efd", color: "white"}} icon={<LocalShippingIcon/>}>
                        <h3>Produto coletado pela transportadora!</h3>
                        <p>Produto coletado com sucesso.</p>
                        <p>Em rota para destino</p>
                    </VerticalTimelineElement>


                    <VerticalTimelineElement iconStyle={{background: "green", color: "white"}} icon={<CheckCircleIcon/>}>
                        <h4>Produto entregue!</h4>
                        <h5>recebido: 04/04/2023</h5>
                        
                    </VerticalTimelineElement>
            </VerticalTimeline>
           </div>

        </section>
    )

}

export default TimeLine