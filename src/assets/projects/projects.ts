import videgameImg from "./images/videogame_project.png";
import barbershop from "./images/barbershop.png";
import trackerApp from "./images/expTracker.png";

export interface info {
  img: string;
  name: string;
  stack: string[];
  collaborators: string;
  description: string;
  repoFront: string;
  repoBack: string;
  site: string;
}

export const projectsEs: info[] = [
  {
    img: barbershop,
    name: "Barbershop",
    collaborators:
      "Agustin Puggioni, Manuel Seisdedos, Gonzalo Dos Santos, Ignacio Silva, Jaime Gutièrrez",
    stack: ["Typescript", "React", "Redux-toolkit", "Node/Express", "MongoDB"],
    description:
      "E-commerce que incluye pedido y gestión de turnos, filtrado y búsqueda de productos,  carrito de compra con pasarela de pago, envío de mail, administración de productos, usuarios y compra,",
    repoFront: "https://github.com/adibzr/barbershop-front",
    repoBack: "https://github.com/adibzr/barbershop-back",
    site: "https://barbershop-front-deploy.vercel.app/",
  },
  {
    img: trackerApp,
    name: "Expenses Tracker",
    collaborators: "Solo project",
    stack: ["Typescript", "React", "Material UI", "Node/Express", "MongoDB"],
    description:
      "Aplicación de control de gastos. Crea, edita, elimina, filtra y ordena tus gastos. Almacena los datos en MongoDB. Datos persisten sin requerir login.",
    repoFront: "https://github.com/adibzr/expences_tracker",
    repoBack: "",
    site: "https://expences-tracker-csod.onrender.com/",
  },
  {
    img: videgameImg,
    name: "Video Games page",
    stack: ["Javascript", "React", "Redux", "Node/Express", "PosgreSQL"],
    collaborators: "Solo project",
    description:
      "App de videojuegos que incluye filtrados, ordenamiento, creación  y búsqueda. Usa como fuente la API de Rawg.io.",
    repoFront: "https://github.com/adibzr/videogames-front",
    repoBack: "https://github.com/adibzr/videogames-back",
    site: "https://videogame-static-site.onrender.com",
  },
];

export const projectsEn = [
  {
    img: barbershop,
    name: "Barbershop",
    stack: ["Typescript", "React", "Redux-toolkit", "Express", "MongoDB"],
    collaborators:
      "Agustin Puggioni, Manuel Seisdedos, Gonzalo Dos Santos, Ignacio Silva, Jaime Gutièrrez",
    description:
      "E-commerce that features apointment creation and management, product filtering and search, product cart and payment system, mailing upon compleate/cancel/create/dispatch product, admin features: product modification, creation, deletion; user ban, convert to admin, purchase history; purchase histories, option to complete/cancel/process/dispatch product",
    repoFront: "https://github.com/adibzr/barbershop-front",
    repoBack: "https://github.com/adibzr/barbershop-back",
    site: "https://barbershop-front-deploy.vercel.app/",
  },
  {
    img: trackerApp,
    name: "Expenses Tracker",
    collaborators: "Solo project",
    stack: ["Typescript", "React", "Material UI", "Node/Express", "MongoDB"],
    description:
      "Expenses Tracker App. Create, edit, delete, filter and order your expenses. Data stored in mongoDB. Data persistance without login.",
    repoFront: "https://github.com/adibzr/expences_tracker",
    repoBack: "",
    site: "https://expences-tracker-csod.onrender.com/",
  },
  {
    img: videgameImg,
    name: "Video Games page",
    stack: ["Javascript", "React", "Redux", "Node/Express", "PosgreSQL"],
    collaborators: "Solo project",
    description:
      "Videogames App that shows videogames from Rawg.io API. Able to filter, order, create and seach games. Backend in Render, please allow a few minutes to load",
    repoFront: "https://github.com/adibzr/videogames-front",
    repoBack: "https://github.com/adibzr/videogames-back",
    site: "https://videogame-static-site.onrender.com",
  },
];
