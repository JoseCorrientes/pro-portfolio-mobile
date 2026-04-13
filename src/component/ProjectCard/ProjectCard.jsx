import { useState } from "react";
import ProjectCardCSS from "./ProjectCard.module.css";
import ReactPlayer from "react-player";

import { ChevronDown, ChevronUp } from "lucide-react";

function ProjectCard({
  projectID,
  projectName,
  projectDescription,
  projectTechnologies,
  projectFERepository,
  projectBERepository,
  projectDeployed,
  projectClickHere,
  pData,
  lang,
}) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => setVisible(!visible);

  return (
    <div>
      {!visible && (
        // Tocar cuando no es visible
        <div className={ProjectCardCSS.project_Card_Empty_Container}>
          <button
            className={ProjectCardCSS.button_compressed}
            onClick={toggleVisible}
          >
            <ChevronDown size={34} />
          </button>
          <p
            style={{
              marginLeft: "40px",
              color: "white",
              display: "flex",
              flexDirection: "row",
              justifyItems: "start",
              gap: "10px",
              fontSize: "1.5rem",
              fontWeight: 300,
              lineHeight: "1.5rem",
            }}
          >
            {projectID}
            <span className={ProjectCardCSS.listTitle}>
              - {pData.pName[lang]}
            </span>
          </p>
        </div>
      )}
      {visible && (
        <div className={ProjectCardCSS.project_Card}>
          <div className={ProjectCardCSS.project_Card_left_container}>
            <button
              className={ProjectCardCSS.button_compressed}
              onClick={toggleVisible}
            >
              <ChevronUp size={34} />
            </button>
            <div className={ProjectCardCSS.title_Container}>
              <p className={ProjectCardCSS.title_p_Label}>
                {projectName[lang]}:
              </p>
              <span className={ProjectCardCSS.title_span_Text}>
                {pData.pName[lang]}
              </span>
            </div>

            <div className={ProjectCardCSS.description_Container}>
              <p className={ProjectCardCSS.description_p_Label}>
                {projectDescription[lang]}:
              </p>
              {pData.pDescription[lang].map((x, index) => (
                <span
                  key={projectID}
                  className={ProjectCardCSS.description_span_Text}
                >
                  {x}
                </span>
              ))}
            </div>

            {/* Aca termina la descripcion */}
            <div className={ProjectCardCSS.tech_Container}>
              <p className={ProjectCardCSS.tech_p_Label}>
                {projectTechnologies[lang]}:
              </p>
              <span className={ProjectCardCSS.tech_span_Text}>
                {pData.pTech[lang]}
              </span>
            </div>
            {pData.pFront && pData.pFront !== "" && (
              <div className={ProjectCardCSS.frontrepo_Container}>
                <p className={ProjectCardCSS.frontrepo_p_Label}>
                  {projectFERepository[lang]}:
                </p>
                <a className={ProjectCardCSS.link_External} href={pData.pFront}>
                  {projectClickHere[lang]}
                </a>
              </div>
            )}
            {pData.pBack && pData.pBack !== "" && (
              <div className={ProjectCardCSS.backrepo_Container}>
                <p className={ProjectCardCSS.backrepo_p_Label}>
                  {projectBERepository[lang]}:{" "}
                </p>
                <a className={ProjectCardCSS.link_External} href={pData.pBack}>
                  {projectClickHere[lang]}
                </a>
              </div>
            )}
            {pData.pDeploy && pData.pDeploy !== "" && (
              <div className={ProjectCardCSS.frontdeploy_Container}>
                <p className={ProjectCardCSS.frontdeploy_p_Label}>
                  {projectDeployed[lang]}:{" "}
                </p>
                <a
                  className={ProjectCardCSS.link_External}
                  href={pData.pDeploy}
                >
                  {projectClickHere[lang]}
                </a>
              </div>
            )}
          </div>

          <div className={ProjectCardCSS.project_Card_right_container}>
            {pData.pVideo &&
              pData.pVideo.length > 0 &&
              pData.pVideo.map((x) => (
                <div className={ProjectCardCSS.video_Container}>
                  <ReactPlayer
                    url={x}
                    playing={false}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              ))}

            {pData.pPhoto &&
              pData.pPhoto.length > 0 &&
              pData.pPhoto.map((x) => (
                <div className={ProjectCardCSS.video_Container}>
                  <img src={x} alt={x} width="120%" height="120%" />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { ProjectCard };
