import AppCSS  from './App.module.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage } from './component/LandingPage/LandingPage';
import { Projects } from './component/Projects/Projects.jsx';
import { Skills } from './component/Skills/Skills';
import { Link } from "react-router-dom";
import { useState } from 'react';



function App() {

  const [lang, setLang] = useState(0); 

  function toggleLanguage(e) {
        if (lang===0) {
            setLang(1);
        } else {
            setLang(0);
        }
      }  

  return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage
                                           toggleLanguage={toggleLanguage}
                                           lang={lang} 
                />}></Route>
                <Route path="/Projects" element={<Projects
                                            lang={lang}
                />}></Route>
                <Route path="/Skills" element={<Skills
                                            lang={lang}
                />}></Route>
            </Routes>
            <footer className={AppCSS.footer_Container}>
                    <ol>
                        <li>
                            <Link to="/">
                                <button>
                                    HOME
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Projects">
                                <button>
                                        PROJECTS
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Skills">
                                <button>
                                    SKILLS
                                </button>
                            </Link>
                        </li>
                        <li><Link to="/">
                                <button>
                                    CONTACT ME
                                </button>
                            </Link>
                        </li>
                    </ol>
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
