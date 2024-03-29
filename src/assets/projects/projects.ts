import videgameImg from "./images/videogame_project.png";
import barbershop from "./images/barbershop.png";

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
    img: videgameImg,
    name: "Video Games page",
    stack: ["React", "Redux", "Node/Express", "PosgreSQL"],
    collaborators: "Solo project",
    description:
      "App de videojuegos que incluye filtrados, ordenamiento, creación  y búsqueda. Usa como fuente la API de Rawg.io. Backend en render es lento, permita unos minutos a que cargue",
    repoFront: "https://github.com/adibzr/videogames-front",
    repoBack: "https://github.com/adibzr/videogames-back",
    site: "https://videogame-static-site.onrender.com",
  },
  {
    img: barbershop,
    name: "Barbershop",
    collaborators:
      "Agustin Puggioni, Manuel Seisdedos, Gonzalo Dos Santos, Ignacio Silva, Jaime Gutièrrez",
    stack: ["React", "Redux-toolkit", "Node/Express", "MongoDB"],
    description:
      "E-commerce que incluye pedido y gestión de turnos, filtrado y búsqueda de productos,  carrito de compra con pasarela de pago, envío de mail, administración de productos, usuarios y compra,",
    repoFront: "https://github.com/adibzr/barbershop-front",
    repoBack: "https://github.com/adibzr/barbershop-back",
    site: "https://barbershop-front-deploy.vercel.app/",
  },
];

export const projectsEn = [
  {
    img: videgameImg,
    name: "Video Games page",
    stack: ["React", "Redux", "Node/Express", "PosgreSQL"],
    collaborators: "Solo project",
    description:
      "Videogames App that shows videogames from Rawg.io API. Able to filter, order, create and seach games. Backend in Render, please allow a few minutes to load",
    repoFront: "https://github.com/adibzr/videogames-front",
    repoBack: "https://github.com/adibzr/videogames-back",
    site: "https://videogame-static-site.onrender.com",
  },
  {
    img: barbershop,
    name: "Barbershop",
    stack: ["React", "Redux-toolkit", "Express", "MongoDB"],
    collaborators:
      "Agustin Puggioni, Manuel Seisdedos, Gonzalo Dos Santos, Ignacio Silva, Jaime Gutièrrez",
    description:
      "E-commerce that features apointment creation and management, product filtering and search, product cart and payment system, mailing upon compleate/cancel/create/dispatch product, admin features: product modification, creation, deletion; user ban, convert to admin, purchase history; purchase histories, option to complete/cancel/process/dispatch product",
    repoFront: "https://github.com/adibzr/barbershop-front",
    repoBack: "https://github.com/adibzr/barbershop-back",
    site: "https://barbershop-front-deploy.vercel.app/",
  },
];
