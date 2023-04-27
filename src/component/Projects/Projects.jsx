import ProjectCSS from "./Projects.module.css";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import {data} from "../../text/text";

function Projects ({lang}){

    return(
        <div>
            <header>
                <h2 className={ProjectCSS.page_Title}>{data.projectTitle[lang]}</h2>
                <Link 
                    className={ProjectCSS.link_Visibility}
                    to= "/">
                    <button className={ProjectCSS.button_Back_Menu}>{data.backHome[lang]}
                    </button>
                </Link>
            </header>


            <div className={ProjectCSS.projects_Container}>


                <div className={ProjectCSS.project_Card}>


                    <div className={ProjectCSS.project_Card_left_container}>
                        
                         <div className={ProjectCSS.title_Container}>

                            <p className={ProjectCSS.title_p_Label}>{data.projectName[lang]}:</p> 

                            <span className={ProjectCSS.title_span_Text}>BUYME APP</span>
                        </div> 







                         <div className={ProjectCSS.description_Container}>
                            <p className={ProjectCSS.description_p_Label}>{data.projectDescription[lang]}:</p> 
                            <span className={ProjectCSS.description_span_Text}>Buyme App es nuestro Proyecto Final Grupal para graduarnos de Henry. Consiste en una app cliente-servidor para gestionar un e-commerce. Consta de la parte cliente y de la parte administradora que se accede por el front y se discrimina por el loggin ingresado. utiliza a mercado pago como pasarela de pago. Entre las tecnologias usadas esta js, node, PostGreSQL, nodemailer, mercadopago API, express, Sequelize, CSS, HTML.
                            </span>
                        </div> 

                         <div className={ProjectCSS.tech_Container}>
                            <p className={ProjectCSS.tech_p_Label}>{data.projectTechnologies[lang]}:</p> 
                            <span className={ProjectCSS.tech_span_Text}>Js, NodeJs, ReactJs, ExpressJS, Sequelize, PostgreSQL
                            </span>
                        </div> 


                        <div className={ProjectCSS.frontrepo_Container}>
                            <p className={ProjectCSS.frontrepo_p_Label}>{data.projectFERepository[lang]}:</p> 
                            <a 
                                className={ProjectCSS.link_External}
                                href="https://github.com/JoseCorrientes/Buyme-app-PF.git">
                                {data.projectClickHere[lang]}
                            </a>
                        </div> 


                        <div className={ProjectCSS.backrepo_Container}>
                            <p className={ProjectCSS.backrepo_p_Label}>{data.projectBERepository[lang]}: </p> 
                            <a 
                                className={ProjectCSS.link_External}
                                href="https://github.com/JoseCorrientes/Buyme-app-PF.git">
                                {data.projectClickHere[lang]}
                            </a>
                        </div> 


                        <div className={ProjectCSS.frontdeploy_Container}>
                            <p className={ProjectCSS.frontdeploy_p_Label}>{data.projectDeployed[lang]}: </p> 

                            <a 
                                className={ProjectCSS.link_External}
                                href="https://github.com/JoseCorrientes/Buyme-app-PF.git">
                                {data.projectClickHere[lang]}
                            </a>
                        </div>

                    </div>  
                    

                    <div className={ProjectCSS.project_Card_right_container}>
                        <div
                            className={ProjectCSS.video_Container}>
                            <ReactPlayer
                                url="https://youtu.be/P2944P1AZcM"
                                playing={false}
                                controls={true}
                                width="100%"
                                height="100%"
                            />
                        </div> 
                        <div
                            className={ProjectCSS.video_Container}>
                            <ReactPlayer
                                url="https://youtu.be/os5HgswlHWM"
                                playing={false}
                                controls={true}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                        
                </div>



            </div>  




            <div
                className={ProjectCSS.button_Back_Menu_Lower_Container}
                >               
                <Link 
                        to= "/">
                        <button className={ProjectCSS.button_Back_Menu_Button}>{data.backHome[lang]}
                        </button>
                </Link>
            </div>     

        </div>
        )
}

export {Projects}