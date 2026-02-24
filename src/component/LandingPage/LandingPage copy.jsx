import LandingPageCSS from "./LandingPage.module.css";
import Photo from "../../images/FotoJosePerfil.png";
import { Link } from "react-router-dom";
// import CV from "../../files/Resume.pdf";
import CV from "../../files/CV Jose Garcia.docx";
import Resume from "../../files/RESUME Jose Garcia.docx";
import {data } from "../../text/text";

function LandingPage({toggleLanguage, lang}) {

  
    
  return (
    <div className={LandingPageCSS.main_Container}>
        <div  
            className={LandingPageCSS.language_Bar}>
                <p>{data.language[lang]}</p>
                <div
                    className={LandingPageCSS.switch_Button}
                    >
                     <input 
                        type="checkbox"
                        name="switch_Button"
                        value={true}
                        id="switch-label"
                        className={LandingPageCSS.switch_Button_Checkbox}
                        onChange={(e)=>toggleLanguage(e)}
                        />   
                     <label 
                        htmlFor="switch-label"
                        className={LandingPageCSS.switch_Button_Label}
                        ></label>   
                </div>
        </div>





        <div className={LandingPageCSS.upper_Container}>

            <div className={LandingPageCSS.msj_Container}>
                <p>
                    {data["description"]["line1"][lang]} <span> José Ernesto García. </span>{data["description"]["line2"][lang]}  
                </p>
                <br></br>
                <p>{data["description"]["line3"][lang]}</p>
                <p>{data["description"]["line4"][lang]}</p> 
                <p>{data["description"]["line5"][lang]}</p>
                <p>{data["description"]["line6"][lang]}</p>
                <p>{data["description"]["line7"][lang]}</p>
                <p>{data["description"]["line7plus"][lang]}</p>
                <p>{data["description"]["line8"][lang]}</p>
            </div> 
            <div className={LandingPageCSS.photo_Container}>
                <img src={Photo} alt="Jose Garcia"></img>
            </div>
        </div>  
    <div className={LandingPageCSS.lower_Container}>
                    <div className={LandingPageCSS.buttons_Container}>
                            <div className={LandingPageCSS.button_Proyects}>
                                <Link to="/Projects">
                                <button>{data.buttonProyect[lang]}</button>
                                </Link>
                            </div>

                            {/* <div className={LandingPageCSS.button_Cv}>
                                <a
                                href={CV}
                                download="JoseGarciaResume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                {data.buttonCV[lang]}
                                </a>
                                </div> */}

                            {lang===1 &&
                            <div className={LandingPageCSS.button_Cv}>
                                <a
                                href={CV}
                                download="JoseGarciaCV.docx"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                {data.buttonCV[lang]}
                                </a>
                                </div>
                            }  
                            
                            {lang===0 &&
                            <div className={LandingPageCSS.button_Cv}>
                                <a
                                href={Resume}
                                download="JoseGarciaResume.docx"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                {data.buttonCV[lang]}
                                </a>
                                </div>
                            }                                

                            <div className={LandingPageCSS.button_Skills}>
                                <Link to="/Skills">
                                <button>{data.buttonSkills[lang]}</button>
                                </Link>
                            </div> 
                    </div>


                <div className={LandingPageCSS.contactus_Container}>
                        <h1>{data.information[lang]}</h1>
                        <br />
                        <span
                            className={LandingPageCSS.container_Linkedin_title}
                            >LINKEDIN: </span>
                        <a 
                            className={LandingPageCSS.contact_Link}
                            href="https://www.linkedin.com/in/joseernestogarciadeveloper/">
                            https://www.linkedin.com/in/joseernestogarciadeveloper
                        </a>
                        <span
                            className={LandingPageCSS.container_OtherLink_title}
                            >GITHUB: </span>
                        <a
                            className={LandingPageCSS.contact_Link1} 
                            href="https://github.com/JoseCorrientes">
                            https://github.com/JoseCorrientes
                        </a>
                        <span
                            className={LandingPageCSS.container_OtherLink_title}
                            >@MAIL: </span>
                        <a 
                            className={LandingPageCSS.contact_Link1} 
                            href="mailto: josernestogarcia609@gmail.com">
                            josernestogarcia609@gmail.com
                        </a>
                        <span
                            className={LandingPageCSS.container_OtherLink_title}
                            >{data.phone[lang]}: </span>
                        <p
                            className={LandingPageCSS.contact_Link1}    
                            >
                            (+54) 9 3794 599549
                        </p>
                        <span
                            className={LandingPageCSS.container_OtherLink_title}
                            >{data.country[lang]}: </span>
                        <p
                            className={LandingPageCSS.contact_Link1}    
                            >
                            Argentina (Corrientes)
                        </p>
                </div> 
    </div> 
    </div>
  );
}

export { LandingPage };
