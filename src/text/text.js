import Flow1 from "../projectImages/PedidoDeVacacionesoEnfermedadUsanbdoN8nForms.jpg";
import Flow2 from "../projectImages/PedidoDeVacacionesoEnfermedadUsanbdoWebhooksyPostman.jpg";

const data = {
  language: ["English", "Español"],
  description: {
    line1: [
      "Systems Engineer and Full-Stack Developer passionate about building scalable, high-quality software.",
      "Ingeniero en Sistemas y Full-Stack Developer apasionado por construir software escalable y de alta calidad.",
    ],
    line2: [
      "I specialize in the PERN stack (PostgreSQL, Express, React, Node.js) with a strong focus on TypeScript.",
      "Me especializo en el stack PERN (PostgreSQL, Express, React, Node.js) con un fuerte enfoque en TypeScript.",
    ],
    line3: [
      "My approach combines engineering rigor with agile development, allowing me to solve complex problems",
      "Mi enfoque combina el rigor de la ingeniería con la agilidad del desarrollo moderno, permitiéndome resolver problemas complejos",
    ],
    line4: [
      "—like optimizing scheduling logic in my project TakeATurn— while ensuring clean, maintainable code.",
      "—como la optimización de lógica de turnos en mi proyecto TakeATurn— asegurando siempre un código limpio y mantenible.",
    ],
  },
  buttonProyect: ["MY PROJECTS", "MIS PROJECTOS"],
  buttonCV: ["RESUME", "CV"],
  buttonSkills: ["SKILLS", "HABILIDADES"],
  information: ["INFORMATION && CONTACT", "INFORMACION && CONTACTO"],
  phone: ["PHONE", "TELÉFONO"],
  country: ["COUNTRY", "PAÍS"],

  skillTitle: ["SKILLS", "HABILIDADES"],
  backHome: ["BACK HOME", "VOLVER AL INICIO"],
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
  languageW: ["WRITTEN", "ESCRITO"],
  languageS: ["SPOKEN", "ORAL"],
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
      pName: [
        "REQUEST FOR LEAVE (Vacation or Sick Leave)- N8N FLOW USING WEBHOOKS LIKE AN REST API",
        "PEDIDO POR LICENCIA (Vacaciones o Enfermedad) - FLUJO N8N USANDO WEBHOOKS COMO UNA API REST",
      ],
      pDescription: [
        `This n8n workflow automates employee leave requests, whether for vacation or sick leave, from a webhook input accessible via a POST request. First, it checks a database for available days and whether the employee meets certain conditions, and then approves or rejects the request. HR also performs this process by accessing a webhook with a POST request.
If approved, the request is saved in Google Calendar, and an email notification is sent in each case.
For a detailed look at the workflow, access the WEB ACCESS URL and read the README.MD file.`,
        `Este flujo n8n automatiza desde una entrada de webhook -accesible a traves de un POST- los pedidos de un empleado para tomar licencia, ya sea por Vacaciones o o Enfermedad. Primero analiza desde una base de datos si tiene dias disponibles y si cumple ciertas condiciones y luego le da o le rechaza el pedido - RRHH tambien hace esto accediendo a con un POST a un webhook.
          Si lo aprueba lo graba en Google Calendar y en cada caso envio un email con la notificacion pertinente.
          Para ver bien el detalle del flujo acceder a la URL ACCESO WEB  y alli leer el README.MD.`,
      ],
      pTech: ["n8n", "n8n"],

      pFront: "",
      pBack: "",
      pDeploy: "https://github.com/JoseCorrientes/n8n-PedidoDeLicencia",
      pVideo: [],
      pPhoto: [Flow2],
    },
    {
      pName: [
        "REQUEST FOR LEAVE (Vacation or Sick Leave)- N8N FLOW USING FORMS",
        "PEDIDO POR LICENCIA (Vacaciones o Enfermedad) - FLUJO N8N USANDO FORMULARIOS",
      ],
      pDescription: [
        `This n8n workflow automates employee leave requests, whether for vacation or sick leave, from an n8n form input. First, it checks a database to see if the employee has available days and meets certain conditions, and then approves or rejects the request.
          If approved, it saves the request to Google Calendar, and in each case, an email notification is sent.
          For a detailed look at the workflow, access the WEB ACCESS URL and read the README.MD file.`,
        `Este flujo n8n automatiza desde una entrada n8n form los pedidos de un empleado para tomar licencia, ya sea por Vacaciones o o Enfermedad. Primero analiza desde una base de datos si tiene dias disponibles y si cumple ciertas condiciones y luego le da o le rechaza el pedido.
          Si lo aprueba lo graba en Google Calendar y en cada caso envio un email con la notificacion pertinente.
          Para ver bien el detalle del flujo acceder a la URL ACCESO WEB  y alli leer el README.MD.`,
      ],
      pTech: ["n8n", "n8n"],

      pFront: "",
      pBack: "",
      pDeploy: "https://github.com/JoseCorrientes/n8n-PedidoDeLicencia",
      pVideo: [],
      pPhoto: [Flow1],
    },
    {
      pName: ["MEMO PAIRS", "MEMO PAIRS"],
      pDescription: [
        `Memo Pairs is a game where you must guess where in the scoreboard are the pairs of equal faces. When you are success both of the cards are quited of the board and you earn a point. The goal is to make the biggest score possible.`,
        `Memo Pairs es un juego donde debe adivinar donde estan un par de caras iguales dentro del tablero. Cuando lo logra, ambas caras son eliminadas del tablero y gana un punto. El objetivo es hacer la mayor puntuacion posible.`,
      ],
      pTech: [
        "HTML, TailwindCSS, Javascript, Vite, React, Web Design. ",
        "HTML, TailwindCSS, Javascript, Vite, React, Diseño para Web.",
      ],

      pFront: "https://github.com/JoseCorrientes/MemoPairs",
      pBack: "",
      pDeploy: "https://memopairs.vercel.app",
      pVideo: ["https://www.youtube.com/watch?v=o1IIwVWu45M"],
      pPhoto: [],
    },
    {
      pName: ["TIC-TAC-TOE", "TIC-TAC-TOE"],
      pDescription: [
        `This is SPA that allow you to defeat the CPU playing tic-tac-toe. First af all you must decide if you move first, and the number of rounds to play. Then You and the CPU plays alternatively.
          At the end the app shows who won.`,
        `Este es un SPA que te permite derrotar a la CPU jugando al tres en raya. En primer lugar debes decidir si te mueves primero y el número de rondas a jugar. Entonces tú y la CPU juegan alternativamente.
          Al final la aplicación muestra quién ganó.
          `,
      ],
      pTech: [
        "HTML, CSS, TailwindCSS, Javascript, Vite, React, React-icons, responsive design. ",
        "HTML, CSS, TailwindCSS, Javascript, Vite, React, React-icons, NodeJs, diseño responsivo.",
      ],
      pFront: "https://github.com/JoseCorrientes/tictactoe",
      pBack: "",
      pDeploy: "https://tictactoe-sepia-tau.vercel.app/",
      pVideo: ["https://youtu.be/ecTSwWSCGik"],
      pPhoto: [],
    },
    {
      pName: ["TAKE-A-TURN APP", "TAKE-A-TURN APP"],
      pDescription: [
        "This SPA App allows Odontolgy Patients to pick up a turn with theirs odontologist on a on-line way. The turns can be picked-up or canceled. The Doctors can create or cancel turns so too disable a turn or a whole day.This SPA App allows Odontologist's Patients to pick  a turn with their dentist on an on-line way. The turns can be picked or canceled. The Doctors can create or cancel turns so too disable to turn or a whole day. This app is the best way to a odontologist to manage his schedule without other assistence.",
        "Esta aplicación SPA permite a los pacientes del odontólogo elegir un turno con su dentista de forma online. Los turnos se pueden elegir o cancelar. Los médicos pueden crear o cancelar turnos, por lo que también pueden desactivar el turno o un día completo. Esta aplicación es la mejor manera para que un odontólogo administre su agenda sin otra ayuda.",
      ],
      pTech: [
        "HTML, CSS, TailwindCSS, Javascript, Vite, React, Redux, Redux-Thunk, Axios, React-Player, React-icons, NodeJs, Express, sib-api-v3-sdk (Breve/Send-in-Blue), mongoose, Mongo Atlas, dotenv, cors, responsive design. ",
        "HTML, CSS, TailwindCSS, Javascript, Vite, React, Redux, Redux-Thunk, Axios, React-Player, React-icons, NodeJs, Express, sib-api-v3-sdk (Breve/Send-in-Blue), mongoose, Mongo Atlas, dotenv, cors, diseño responsivo.",
      ],
      pFront: "https://github.com/JoseCorrientes/TakeATurn-Frontend",
      pBack: "https://github.com/JoseCorrientes/TakeATurn-Backend",
      pDeploy: "",
      pVideo: [
        "https://youtu.be/z9xeJO0EQRQ",
        "https://youtu.be/7PjRhMso8iE",
        "https://youtu.be/5n9C7rFT2N0",
      ],
      pPhoto: [],
    },
    {
      pName: ["THE ULTIMATE MOVIE APP", "THE ULTIMATE MOVIE APP"],
      pDescription: [
        "This App let you to search a movie with the TMDB Movie search engine (The Movies DataBase). You can view further details of that movie and -if you see it interesting- keep its data in a Favorite file into a Mongo DB. While we are seeing further details of a movie we can also send a message to a friend suggesting that movie. This App has deployed in a Render free server so probably in the first movie searches it will give you a not found message. The backend takes a few seconds in put itself online",
        "Esta aplicación te permite buscar un titulo de pelicula usando el motor the TMDB (The Movies DataBase). Se pueden ver los detalles de esa película y si gusta se puede agregar a una lista de favoritas que se guarda en una DB Mongo. Cuando estamos viendo los detalles de una pelicula se puede enviar por email los datos para sugerirla a un amigo. Esta aplicación se ha implementado en un servidor gratuito de Render, por lo que probablemente en las primeras búsquedas de películas le dará un mensaje de no encontrado. El backend tarda unos segundos en ponerse en línea.",
      ],
      pTech: [
        "HTML, CSS, TailwindCSS, Javascript, Vite, React, Redux, Redux-Thunk, Axios, React-Player, React-icons, React-lottie-player,  NodeJs, Express, sib-api-v3-sdk (Breve/Send-in-Blue), mongoose, dotenv, cors, responsive design. ",
        "HTML, CSS, TailwindCSS, Javascript, Vite, React, Redux, Redux-Thunk, Axios, React-Player, React-icons, React-lottie-player,  NodeJs, Express, sib-api-v3-sdk (Breve/Send-in-Blue), mongoose, dotenv, cors, diseño responsivo.",
      ],
      pFront: "https://github.com/JoseCorrientes/TheUltimateFilmZone-Frontend",
      pBack: "https://github.com/JoseCorrientes/TheUltimateFilmZone-Backend",
      pDeploy: "https://theultimatefilmapp.vercel.app/",
      pVideo: ["https://youtu.be/oBnOTrgp_2c"],
      pPhoto: [],
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
      pPhoto: [],
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
      pPhoto: [],
    },
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
      pPhoto: [],
    },
  ],
};

export { data };
