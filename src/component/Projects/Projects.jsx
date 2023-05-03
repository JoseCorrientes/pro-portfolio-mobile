import ProjectCSS from "./Projects.module.css";

import {Link} from "react-router-dom";
import {data} from "../../text/text";
import { ProjectCard } from "../ProjectCard/ProjectCard";

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
            
             {data.projectData && data.projectData.length>0 && data.projectData.map(item=> 
                <ProjectCard
                    projectName={data.projectName}
                    projectDescription={data.projectDescription}
                    projectTechnologies={data.projectTechnologies}
                    projectFERepository={data.projectFERepository}
                    projectBERepository={data.projectBERepository}
                    projectDeployed={data.projectDeployed}
                    projectClickHere={data.projectClickHere}
                    pData={item}
                    lang={lang}
                />)
            } 
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