import React from "react";
import {} from "react-icons/ai";
import { FiShoppingBag, FiCreditCard } from "react-icons/fi";
import { BsCurrencyDollar, BsShield } from "react-icons/bs";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product1 from "./product1.jpg";
import product2 from "./product2.jpg";
import product3 from "./product3.jpg";
import product4 from "./product4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "pokemonbank",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Pagina 1",
        icon: <FiShoppingBag />,
      },
      {
        name: "Pagina 2",
        icon: <FiShoppingBag />,
      },
      {
        name: "Pagina 3s",
        icon: <FiShoppingBag />,
      },
    ],
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Cargo Netflix mes de mayo",
    desc: "Gracias por su pago",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "Nuevo pago recibido",
    desc: "Salma te envio dinero",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "Nuevo pago recibido",
    desc: "Andres te envio dinero",
    time: "4:39 PM",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "Mi Perfil",
    desc: "Configuracion de la cuenta",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "Mis Transacciones",
    desc: "Alertas de movimientoss",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "Pre-calificado",
    desc: "Productos y servicios pre-calificados",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
