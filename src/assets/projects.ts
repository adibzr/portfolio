import videgameImg from "./images/videogame_project.png";
import barbershop from "./images/barbershop.png";

export const projectsEs = [
  {
    img: videgameImg,
    name: "Video Games page",
    stack: ["React", "Redux", "Node/Express", "PosgreSQL"],
    collaborators: "Solo project",
    description:
      "App de videojuegos que incluye filtrados, ordenamiento, creación  y búsqueda. Usa como fuente la API de Rawg.io.",
  },
  {
    img: barbershop,
    name: "Barbershop",
    collaborators:
      "Agustin Puggioni, Manuel Seisdedos, Gonzalo Dos Santos, Ignacio Silva, Jaime Gutièrrez",
    stack: ["React", "Redux-toolkit", "Node/Express", "MongoDB"],
    description:
      "E-commerce que incluye pedido y gestión de turnos, filtrado y búsqueda de productos,  carrito de compra con pasarela de pago, envío de mail, administración de productos, usuarios y compra,",
  },
];

export const projectsEn = [
  {
    img: videgameImg,
    name: "Video Games page",
    collaborators: "",
    stack: ["React", "Redux", "Express", "PosgreSQL"],
    description:
      "Videogames app: features filterings, order by, create game and search by name",
  },
  {
    img: barbershop,
    name: "Barbershop",
    stack: ["React", "Redux-toolkit", "Express", "MongoDB"],
    collaborators:
      "Agustin Puggioni, Manuel Seisdedos, Gonzalo Dos Santos, Ignacio Silva, Jaime Gutièrrez",
    description:
      "E-commerce that features apointment creation and management, product filtering and search, product cart and payment system, mailing upon compleate/cancel/create/dispatch product, admin features: product modification, creation, deletion; user ban, convert to admin, purchase history; purchase histories, option to complete/cancel/process/dispatch product",
  },
];
