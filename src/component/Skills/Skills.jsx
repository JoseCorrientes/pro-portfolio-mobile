import SkillsCSS from "./Skills.module.css";
import {Link} from "react-router-dom";

function Skills() {
  return (
    <div>
      <header>
        <h2 className={SkillsCSS.page_Title}>SKILLS</h2>
                <Link 
                    className={SkillsCSS.link_Visibility}
                    to= "/">
                    <button className={SkillsCSS.button_Back_Menu}>Back Home
                    </button>
                </Link>    
      </header>
      <div>
        <div className={SkillsCSS.skills_Container}>
          <div className={SkillsCSS.skill_Card_Main_Container}>
            <div className={SkillsCSS.skill_Card}>
                <div className={SkillsCSS.element_Card_Title}>
                    <p>TECHNOLOGIES</p>
                </div>


                <div className={SkillsCSS.element_Card}>
                    <span className={SkillsCSS.js}>
                        <span className={SkillsCSS.tip}>Javascript.</span>
                    </span>
                    <span className={SkillsCSS.ts}>
                        <span className={SkillsCSS.tip}>Typescript.</span>
                    </span>
                    <span className={SkillsCSS.html}>
                        <span className={SkillsCSS.tip}>HTML 5.</span>
                    </span>
                    <span className={SkillsCSS.css}>
                        <span className={SkillsCSS.tip}>CSS 3.</span>
                    </span>
                    <span className={SkillsCSS.react}>
                        <span className={SkillsCSS.tip}>React JS.</span>
                    </span>
                    <span className={SkillsCSS.redux}>
                        <span className={SkillsCSS.tip}>Redux.</span>
                    </span>
                    <span className={SkillsCSS.aggrid}>
                        <span className={SkillsCSS.tip}>AG Grid.</span>
                    </span>
                    <span className={SkillsCSS.node}>
                        <span className={SkillsCSS.tip}>Node Js.</span>
                    </span>
                    <span className={SkillsCSS.express}>
                        <span className={SkillsCSS.tip}>Express Js.</span>
                    </span>
                    <span className={SkillsCSS.sequelize}>
                        <span className={SkillsCSS.tip}>Sequelize ORM.</span>
                    </span>
                    <span className={SkillsCSS.postgres}>
                        <span className={SkillsCSS.tip}>Postgres SQL.</span>
                    </span>
                    <span className={SkillsCSS.git}>
                        <span className={SkillsCSS.tip}>Git.</span>
                    </span>
                    <span className={SkillsCSS.github}>
                        <span className={SkillsCSS.tip}>Github.</span>
                    </span>
                    <span className={SkillsCSS.agile}>
                        <span className={SkillsCSS.tip}>Agile Methodology</span>
                    </span>
                    <span className={SkillsCSS.scrum}>
                        <span className={SkillsCSS.tip}>SCRUM.</span>
                    </span>
                    <span className={SkillsCSS.trello}>
                        <span className={SkillsCSS.tip}>Trello.</span>
                    </span>
                    <span className={SkillsCSS.azure}>
                        <span className={SkillsCSS.tip}>Microsoft Azure.</span>
                    </span>
                    <span className={SkillsCSS.wordpress}>
                        <span className={SkillsCSS.tip}>Wordpress CMS.</span>
                    </span>
              </div>
              
              <div className={SkillsCSS.element_Card_Title}>
                <p>SOFT SKILLS</p>
              </div>




              <div className={SkillsCSS.element_Card_Soft}>
                <p className={SkillsCSS.element_card_Soft_Line}>
                  Self-learning
                </p>
                <p className={SkillsCSS.element_card_Soft_Line}>Motivation</p>
                <p className={SkillsCSS.element_card_Soft_Line}>
                  Responsability
                </p>
                <p className={SkillsCSS.element_card_Soft_Line}>Team-Work</p>
                <p className={SkillsCSS.element_card_Soft_Line}>
                  Active-listening
                </p>
                <p className={SkillsCSS.element_card_Soft_Line}>
                  Time management
                </p>
              </div>






              <div className={SkillsCSS.element_Card_Title}>
                <p>LANGUAGES</p>
              </div>


              <div className={SkillsCSS.element_Card_Soft}>
                <div className={SkillsCSS.element_Card_Lang_Title}>SPANISH</div>
                    <div className={SkillsCSS.element_Card_Lang_Container}>
                        <p className={SkillsCSS.element_Card_Lang_Item}>Written:</p>
                        <span>Native</span>
                        <p className={SkillsCSS.element_Card_Lang_Item}>Spoken: </p>
                        <span>Native</span>
                    </div>
                <div className={SkillsCSS.element_Card_Lang_Title}>ENGLISH</div>
                    <div className={SkillsCSS.element_Card_Lang_Container}>
                        <p className={SkillsCSS.element_Card_Lang_Item}>Written: </p>
                        <span>Lower Intermediate Level</span>
                        <p className={SkillsCSS.element_Card_Lang_Item}>Spoken: </p>
                        <span>Upper Basic Level</span>
                    </div>
              </div>
  













          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Skills };
