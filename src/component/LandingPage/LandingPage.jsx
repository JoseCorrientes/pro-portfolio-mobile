import LandingPageCSS from "./LandingPage.module.css";
import Photo from "../../images/FotoJosePerfil.png";
import { Link } from "react-router-dom";
import CV from "../../files/Resume.pdf";

function LandingPage() {
  return (
    <div className={LandingPageCSS.main_Container}>


        
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
              <button>DOWNLOAD CV</button>
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
          <p>
            <span>Linkedin: </span>
            <a href="https://www.linkedin.com/in/joseernestogarciadeveloper/">
              https://www.linkedin.com/in/joseernestogarciadeveloper/
            </a>
          </p>
          <p>
            <span>Github: </span>
            <a href="https://github.com/JoseCorrientes">
              https://github.com/JoseCorrientes
            </a>
          </p>
          <p>
            <span>@Mail: </span>
            <a href="mailto: josernestogarcia609@gmail.com">
              josernestogarcia609@gmail.com
            </a>
          </p>
          <p>
            <span>Phone: </span>
            (+54) 9 3794 599549
          </p>
          <p>
            <span>Country: </span>
            Argentina (Corrientes)
          </p>
        </div>
    </div> 

    </div>
  );
}

export { LandingPage };
