import LandingPageCSS from "./LandingPage.module.css";
import Photo from "../../images/FotoJosePerfil.png";
import { Link } from "react-router-dom";
import CV from "../../files/Resume.pdf";

function LandingPage() {
  return (
    <div className={LandingPageCSS.main_Container}>

        <div  
            className={LandingPageCSS.language_Bar}>
                <p>Languaje</p>
                <div
                    className={LandingPageCSS.switch_Button}
                    >
                     <input 
                        type="checkbox"
                        name="switch_Button"
                        id="switch-label"
                        className={LandingPageCSS.switch_Button_Checkbox}
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
            Hi, I'm <span> José Garcia</span> . Call me José, please and... Welcome to my Portfolio.
          </p>
          <br></br>
          <p> I'm a Full Stack Developer graduated from Henry's Bootcamp.</p>
          <p>And also I'm an Information Systems Engineer from de UTN - Universidad Tecnológica Nacional (Argentina). </p>          <p>
            I worked in remote way for a startup in Colombia until february
            2023.
          </p>
          <p>
            Right now I am programming in Javascript and nodejs. But i'm very
            curious and continuously search and learn other technologies.
          </p>
          <p>
            My goal is to grow as a Tech Pro, learning a lot in the process and
            of course contributing to your company's grow as well.
          </p>
          <p>
            If you want to know more about me, please contact me by the means
            listed below.
          </p>
         </div> 
        
        <div className={LandingPageCSS.photo_Container}>
          <img src={Photo} alt="Jose Garcia"></img>
          

        
      </div>
    </div> 


      <div className={LandingPageCSS.lower_Container}>

      


        <div className={LandingPageCSS.buttons_Container}>
          <div className={LandingPageCSS.button_Proyects}>
            <Link to="/Projects">
              <button>MY PROJECTS</button>
            </Link>
          </div>
          <div className={LandingPageCSS.button_Cv}>
            <a
              href={CV}
              download="JoseGarciaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD CV
            </a>
            </div>
          <div className={LandingPageCSS.button_Skills}>
            <Link to="/Skills">
              <button>SKILLS</button>
            </Link>
          </div>
        </div>










        <div className={LandingPageCSS.contactus_Container}>


          <h1>INFORMATION && CONTACT</h1>
          <br />

          <span>Linkedin: </span>
          <a 
            className={LandingPageCSS.contact_Link}
            href="https://www.linkedin.com/in/joseernestogarciadeveloper/">
            https://www.linkedin.com/in/joseernestogarciadeveloper
          </a>
          


          <span>Github: </span>
          <a
            className={LandingPageCSS.contact_Link} 
            href="https://github.com/JoseCorrientes">
            https://github.com/JoseCorrientes
          </a>

          <span>@Mail: </span>
          <a 
            className={LandingPageCSS.contact_Link} 
            href="mailto: josernestogarcia609@gmail.com">
            josernestogarcia609@gmail.com
          </a>
          <span>Phone: </span>
          <p
            className={LandingPageCSS.contact_Link}    
            >
            (+54) 9 3794 599549
          </p>
          <span>Country: </span>
          <p
            className={LandingPageCSS.contact_Link}    
            >
            Argentina (Corrientes)
          </p>
        </div>
    </div> 

    </div>
  );
}

export { LandingPage };
