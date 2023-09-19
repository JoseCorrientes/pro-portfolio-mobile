import SkillsCSS from "./Skills.module.css";
import {Link} from "react-router-dom";
import {data} from "../../text/text";

function Skills({lang}) {
  return (
    <div>
      <header>
        <h2 className={SkillsCSS.page_Title}>{data.skillTitle[lang]}</h2>
                <Link 
                    className={SkillsCSS.link_Visibility}
                    to= "/">
                    <button className={SkillsCSS.button_Back_Menu}>{data.backHome[lang]}
                    </button>
                </Link>    
      </header>
      <div>
        <div className={SkillsCSS.skills_Container}>
          <div className={SkillsCSS.skill_Card_Main_Container}>
            <div className={SkillsCSS.skill_Card}>
                <div className={SkillsCSS.element_Card_Title}>
                    <p>{data.technologies[lang]}</p>
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
                        <span className={SkillsCSS.tip}>React Js.</span>
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
                    <span className={SkillsCSS.postgres}>
                        <span className={SkillsCSS.tip}>Postgres SQL.</span>
                    </span>
                    <span className={SkillsCSS.sequelize}>
                        <span className={SkillsCSS.tip}>Sequelize ORM.</span>
                    </span>
                    <span className={SkillsCSS.mongo}>
                        <span className={SkillsCSS.tip}>Mongo DB.</span>
                    </span>
                    <span className={SkillsCSS.mongoose}>
                        <span className={SkillsCSS.tip}>Mongoose Js.</span>
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
                    <span className={SkillsCSS.tailwindcss}>
                        <span className={SkillsCSS.tip}>TailWindCSS.</span>
                    </span>
                    
              </div>
              <div className={SkillsCSS.element_Card_Title}>
                <p>{data.softSkills[lang]}</p>
              </div>
              <div className={SkillsCSS.element_Card_Soft}>
                <p className={SkillsCSS.element_card_Soft_Line}>
                  {data.soft1[lang]}
                </p>
                <p className={SkillsCSS.element_card_Soft_Line}>{data.soft2[lang]}</p>
                <p className={SkillsCSS.element_card_Soft_Line}>
                {data.soft3[lang]}
                </p>
                <p className={SkillsCSS.element_card_Soft_Line}>{data.soft4[lang]}</p>
                <p className={SkillsCSS.element_card_Soft_Line}>
                {data.soft5[lang]}
                </p>
                <p className={SkillsCSS.element_card_Soft_Line}>
                {data.soft6[lang]}
                </p>
              </div>
              <div className={SkillsCSS.element_Card_Title}>
                <p>{data.languageTitle[lang]}</p>
              </div>
              <div className={SkillsCSS.element_Card_Soft}>
                <div className={SkillsCSS.element_Card_Lang_Title}>{data.languageSpanish[lang]}</div>
                    <div className={SkillsCSS.element_Card_Lang_Container}>
                        <p className={SkillsCSS.element_Card_Lang_Item}>{data.languageW[lang]}:</p>
                        <span>{data.languageN[lang]}</span>
                        <p className={SkillsCSS.element_Card_Lang_Item}>{data.languageS[lang]}:</p>
                        <span>{data.languageN[lang]}</span>
                    </div>
                 <div className={SkillsCSS.element_Card_Lang_Title}>{data.languageEnglish[lang]}</div>
                   <div className={SkillsCSS.element_Card_Lang_Container}>
                        <p className={SkillsCSS.element_Card_Lang_Item}>{data.languageW[lang]}:</p>
                        <span>{data.languageLI[lang]}</span>
                        <p className={SkillsCSS.element_Card_Lang_Item}>{data.languageS[lang]}:</p>
                        <span>{data.languageLL[lang]}</span>
                    </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <div
                className={SkillsCSS.button_Back_Menu_Lower_Container}
                >               
                <Link 
                        to= "/">
                        <button className={SkillsCSS.button_Back_Menu_Button}>{data.backHome[lang]}
                        </button>
                </Link>*
     </div>
    </div>
  );
}

export { Skills };
