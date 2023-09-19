const data = {
  language: ["English", "Español"],
  description: {
    line1: ["Hi, I'm", "Hola, soy "],
    line2: [
      "Call me José, please and... Welcome to my Portfolio.",
      "Por favor llámame José y... Bienvenido a mi Portafolio.",
    ],
    line3: [
      "I'm a Full Stack Developer graduated from Henry's Bootcamp.",
      "Soy un Desarrollador Full Stack graduado del Bootcamp de Henry.",
    ],
    line4: [
      "And also I'm an Information Systems Engineer from de UTN - Universidad Tecnológica Nacional (Argentina).",
      "Y también soy un Ingeniero en Sistemas de Información de la UTN - Universidad Tecnologica Nacional (Argentina).",
    ],
    line5: [
      "I worked in remote way for a startup in Colombia until february 2023.",
      "Trabajé en forma remota para una Startup en Colombia hasta febrero de 2023.",
    ],
    line6: [
      "Right now I'm programming in Javascript and nodeJs. But i'm very curious and continuously search and learn other technologies.",
      "Ahora estoy programando en Javascript y nodeJs. Pero soy muy curioso y continuamente busco y aprendo otras tecnologias.",
    ],
    line7: [
      "My goal is to grow as a Tech Pro, learning a lot in the process and of course contributing to your company's grow as well.",
      "Mi objetivo es crecer como profesional en la Tecnología, aprendiendo un monton en el proceso y por supuesto también contribuyendo al crecimiento de su compañia.",
    ],
    line8: [
      "If you want to know more about me, please contact me by the means listed below.",
      "Si quieres conocer mas sobre mi, por favor contactame por los medios listados mas abajo.",
    ],
  },
  buttonProyect: ["MY PROJECTS", "MIS PROJECTOS"],
  buttonCV: ["RESUME", "CV"],
  buttonSkills: ["SKILLS", "HABILIDADES"],
  information: ["INFORMATION && CONTACT", "INFORMACION && CONTACTO"],
  phone: ["Phone", "Teléfono"],
  country: ["Country", "País"],

  skillTitle: ["SKILLS", "HABILIDADES"],
  backHome: ["Back Home", "Menu"],
  technologies: ["TECHNOLOGIES", "TECNOLOGIAS"],
  softSkills: ["SOFT SKILLS", "HABILIDADES BLANDAS"],
  soft1: ["Self-learning", "Autodidacta"],
  soft2: ["Motivation", "Motivación"],
  soft3: ["Responsability", "Responsabilidad"],
  soft4: ["Team-Work", "Trabajo en Equipo"],
  soft5: ["Active-listening", "Escucha Activa"],
  soft6: ["Time management", "Administración del tiempo"],
  languageTitle: ["LANGUAGES", "IDIOMAS"],
  languageSpanish: ["SPANISH", "ESPAÑOL"],
  languageEnglish: ["ENGLISH", "INGLES"],
  languageW: ["Written", "Escrito"],
  languageS: ["Spoken", "Oral"],
  languageN: ["Native", "Nativo"],
  languageLI: ["Lower Intermediate Level", "Nivel Intermedio Bajo"],
  languageLL: ["Upper Basic Level", "Nivel Basico Alto"],
  projectTitle: ["PROJECTS", "PROJECTOS"],
  projectName: ["PROJECT NAME", "NOMBRE DEL PROYECTO"],
  projectDescription: ["DESCRIPTION", "DESCRIPCION"],
  projectTechnologies: ["TECHNOLOGIES", "TECNOLOGIAS"],
  projectFERepository: ["FRONTEND REPOSITORY", "REPOSITORIO FRONTEND"],
  projectBERepository: ["BACKEND REPOSITORY", "REPOSITORIO BACKEND"],
  projectDeployed: ["URL DEPLOYED", "URL ACCESO WEB"],
  projectClickHere: ["Click Here...", "Presione aquí..."],
  projectData: [
    {
      pName: ["BUYME APP", "BUYME APP"],
      pDescription: [
        "Buyme app it's our Final Team Work to graduated from Henry's Bootcamp. It's an client-server app to manage an e-commerce. It has two front parts:  The client part and the administrator one. Depending on you loggin you access to one or the other. The App uses Mercado Pago as  pay gateway. It also uses Jason Web Token to improve the access security.",
        "Buyme App es nuestro Proyecto Final Grupal para graduarnos de Henry. Consiste en una app cliente-servidor para gestionar un e-commerce. Consta de la parte cliente y de la parte administradora que se accede por el front y se discrimina por el loggin ingresado. utiliza a mercado pago como pasarela de pago. Tambien utiliza Jason Web Token para mejorar la seguridad del acceso.",
      ],
      pTech: [
        "HTML, CSS, Javascript, React, Redux, AG Grid, NodeJs, Express, Sequelize, PostgreSQL, Jason Web Token, NodeMailer, MercadoPago Api.",
        "HTML, CSS, Javascript, React, Redux, AG Grid, NodeJs, Express, Sequelize, PostgreSQL, Jason Web Token, NodeMailer, MercadoPago Api.",
      ],
      pFront: "https://github.com/JoseCorrientes/Buyme-app-PF.git",
      pBack: "https://github.com/JoseCorrientes/Buyme-app-PF.git",
      pDeploy: "",
      pVideo: ["https://youtu.be/P2944P1AZcM", "https://youtu.be/os5HgswlHWM"],
    },
    {
      pName: ["MY PORTFOLIO", "MI PORTAFOLIOS"],
      pDescription: [
        "This is an App that I will use as projects portfolio. Once it is deployed, all new project will save in this app. It's only frontend and I made it using javascript, react, react-player, CSS, It also takes you tube videos tu show them. ",
        "Esta es una aplicación que usaré como cartera de proyectos. Una vez que se implemente, todos los proyectos nuevos se guardarán en esta aplicación. Es solo frontend y lo hice usando javascript, react, react-player, CSS, también toma videos de you tube para mostrarlos.",
      ],
      pTech: [
        "HTML, CSS, Javascript, React, React-player.",
        "HTML, CSS, Javascript, React, React-player.",
      ],
      pFront: "https://github.com/JoseCorrientes/pro-portfolio-mobile.git",
      pBack: "",

      pDeploy: "https://pro-portfolio-mobile.vercel.app/",
      pVideo: ["https://youtu.be/Nr9TnGMKSeo"],
    },
    {
      pName: ["TO-DO APP", "APLICACION DE TO-DOs"],
      pDescription: [
        "Todo Classic App.  You can take note of all the chores you must do. Once you did it you can check it or delete it. You can hide the finished ones. This version works in responsive way.",
        "La classica aplicación de To-do s. Puedes tomar nota de todas las tareas que tienes que realizar. Una vez que la realizaste puedes marcarla o borrarla. Puedes ocultar las tareas finalizadas. Esta versión trabaja en formar responsiva.",
      ],
      pTech: [
        "HTML, CSS, Javascript, React, Responsive Design. ",
        "HTML, CSS, Javascript, React, Diseño Responsivo.",
      ],
      pFront: "https://github.com/JoseCorrientes/Todo-mobile.git",
      pBack: "",

      pDeploy: "https://todo-mobile-eta.vercel.app/",
      pVideo: ["https://youtu.be/Mx2vXWgHhkk"],
    },
    {
        pName: ["THE ULTIMATE MOVIE APP", "THE ULTIMATE MOVIE APP"],
        pDescription: [
          "This App let you to search a movie with the TMDB Movie search engine (The Movies DataBase). You can view further details of that movie and -if you see it interesting- keep its data in a Favorite file into a Mongo DB. While we are seeing further details of a movie we can also send a message to a friend suggesting that movie. This App has deployed in a Render free server so probably in the first movie searches it will give you a not found message. The backend takes a few seconds in put itself online",
          "Esta aplicación te permite buscar un titulo de pelicula usando el motor the TMDB (The Movies DataBase). Se pueden ver los detalles de esa película y si gusta se puede agregar a una lista de favoritas que se guarda en una DB Mongo. Cuando estamos viendo los detalles de una pelicula se puede enviar por email los datos para sugerirla a un amigo. Esta aplicación se ha implementado en un servidor gratuito de Render, por lo que probablemente en las primeras búsquedas de películas le dará un mensaje de no encontrado. El backend tarda unos segundos en ponerse en línea.",
        ],
        pTech: [
            "HTML, CSS, TailwindCSS, Javascript, Vite, React, Redux, Redux-Thunk, Axios, React-Player, React-icons, React-lottie-player,  NodeJs, Express, sib-api-v3-sdk (Breve/Send-in-Blue), mongoose, dotenv, cors, responsive design. ",
          "HTML, CSS, TailwindCSS, Javascript, Vite, React, Redux, Redux-Thunk, Axios, React-Player, React-icons, React-lottie-player,  NodeJs, Express, sib-api-v3-sdk (Breve/Send-in-Blue), mongoose, dotenv, cors, responsive design."
        ],
        pFront: "https://github.com/JoseCorrientes/TheUltimateFilmZone-Frontend",
        pBack: "https://github.com/JoseCorrientes/TheUltimateFilmZone-Backend",
        pDeploy: "https://theultimatefilmapp.vercel.app/",
        pVideo: ["https://youtu.be/oBnOTrgp_2c"]
      },
  ],
};

export { data };
