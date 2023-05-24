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
           </div>

        </section>
    )

}

export default TimeLine