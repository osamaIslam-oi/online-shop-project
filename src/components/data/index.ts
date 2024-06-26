import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2024 Genesis GV70",
    description:
      "As luxury brands go, South Korea’s Genesis is relatively new, but it has quickly made a name for itself with vehicles like the GV70.",
    imageURL:
      "https://media.ed.edmunds-media.com/genesis/gv70/2022/oem/2022_genesis_gv70_4dr-suv_35t-sport_fq_oem_1_815x543.jpg",
    price: 50000,
    color: ["#2342", "#000000"],
    category: {
      name: "2024 Genesis GV70",
      imageURL:
        "https://media.ed.edmunds-media.com/genesis/gv70/2022/oem/2022_genesis_gv70_4dr-suv_35t-sport_fq_oem_1_815x543.jpg",
    },
  },
  {
    id: uuid(),
    title: "2024 BMW X5",
    description:
      "The 2024 BMW X5 is a midsize luxury SUV that delivers a blend of performance, comfort, and technology.",
    imageURL:
      "https://media.ed.edmunds-media.com/bmw/x5/2024/oem/2024_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_815.jpg",
    price: 60000,
    color: ["#FFFFFF", "#000000"],
    category: {
      name: "2024 BMW X5",
      imageURL:
        "https://media.ed.edmunds-media.com/bmw/x5/2024/oem/2024_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_815.jpg",
    },
  },
  {
    id: uuid(),
    title: "2024 Audi Q7",
    description:
      "The Audi Q7 is a luxurious and well-rounded midsize SUV with a refined interior and strong performance.",
    imageURL:
      "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_815.jpg",
    price: 70000,
    color: ["#123456", "#654321"],
    category: {
      name: "2024 Audi Q7",
      imageURL:
        "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_815.jpg",
    },
  },
  {
    id: uuid(),
    title: "2024 Mercedes-Benz GLE",
    description:
      "The Mercedes-Benz GLE offers a combination of elegance, advanced technology, and strong performance.",
    imageURL:
      "https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2024/oem/2024_mercedes-benz_gle-class_4dr-suv_gle-450-4matic_fq_oem_2_815x543.jpg",
    price: 75000,
    color: ["#FF5733", "#C70039"],
    category: {
      name: "2024 Mercedes-Benz GLE",
      imageURL:
        "https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2024/oem/2024_mercedes-benz_gle-class_4dr-suv_gle-450-4matic_fq_oem_2_815x543.jpg",
    },
  },
  {
    id: uuid(),
    title: "2024 Genesis GV70",
    description:
      "As luxury brands go, South Korea’s Genesis is relatively new, but it has quickly made a name for itself with vehicles like the GV70.",
    imageURL:
      "https://media.ed.edmunds-media.com/genesis/gv70/2022/oem/2022_genesis_gv70_4dr-suv_35t-sport_fq_oem_1_815x543.jpg",
    price: 50000,
    color: ["#2342", "#000000"],
    category: {
      name: "2024 Genesis GV70",
      imageURL:
        "https://media.ed.edmunds-media.com/genesis/gv70/2022/oem/2022_genesis_gv70_4dr-suv_35t-sport_fq_oem_1_815x543.jpg",
    },
  },
  {
    id: uuid(),
    title: "2024 BMW X5",
    description:
      "The 2024 BMW X5 is a midsize luxury SUV that delivers a blend of performance, comfort, and technology.",
    imageURL:
      "https://media.ed.edmunds-media.com/bmw/x5/2024/oem/2024_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_815.jpg",
    price: 60000,
    color: ["#FFFFFF", "#000000"],
    category: {
      name: "2024 BMW X5",
      imageURL:
        "https://media.ed.edmunds-media.com/bmw/x5/2024/oem/2024_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_815.jpg",
    },
  },
  {
    id: uuid(),
    title: "2024 Audi Q7",
    description:
      "The Audi Q7 is a luxurious and well-rounded midsize SUV with a refined interior and strong performance.",
    imageURL:
      "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_815.jpg",
    price: 70000,
    color: ["#123456", "#654321"],
    category: {
      name: "2024 Audi Q7",
      imageURL:
        "https://media.ed.edmunds-media.com/audi/q7/2022/oem/2022_audi_q7_4dr-suv_prestige_fq_oem_1_815.jpg",
    },
  },
  {
    id: uuid(),
    title: "2024 Mercedes-Benz GLE",
    description:
      "The Mercedes-Benz GLE offers a combination of elegance, advanced technology, and strong performance.",
    imageURL:
      "https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2024/oem/2024_mercedes-benz_gle-class_4dr-suv_gle-450-4matic_fq_oem_2_815x543.jpg",
    price: 75000,
    color: ["#FF5733", "#C70039"],
    category: {
      name: "2024 Mercedes-Benz GLE",
      imageURL:
        "https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2024/oem/2024_mercedes-benz_gle-class_4dr-suv_gle-450-4matic_fq_oem_2_815x543.jpg",
    },
  },
];
