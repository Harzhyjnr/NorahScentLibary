// Centralized product data so single product page can reliably look up items by id
import ImgMan1 from "../assets/mancre 2.webp";
import ImgMan2 from "../assets/louis.webp";
import ImgMan3 from "../assets/victor.webp";
import ImgMan4 from "../assets/mancre.webp";

import ImgWomen1 from "../assets/mancre.webp";
import ImgWomen2 from "../assets/victor.webp";
import ImgWomen3 from "../assets/mancre 2.webp";
import ImgWomen4 from "../assets/louis.webp";

export const menProducts = [
  {
    id: 101,
    title: "Mancera Red Tobacco Intense EDP 120ml",
    details: "",
    price: 24000,
    image: ImgMan1,
    brand: "Mancera",
    size: "Large (100–200ml)",
  },
  {
    id: 102,
    title: "Louis Vuitton Ombre Nomade EDP 100ML",
    details: "",
    price: 97000,
    image: ImgMan2,
    brand: "Louis Vuitton",
    size: "Medium (50–99ml)",
  },
  {
    id: 103,
    title: "Viktor&Rolf Spicebomb Night Vision EDP 90ML",
    details: "",
    price: 21500,
    image: ImgMan3,
    brand: "Viktor&Rolf",
    size: "Medium (50–99ml)",
  },
  {
    id: 104,
    title: "Mancera Red Tobacco EDP 120ml",
    details: "",
    price: 21000,
    image: ImgMan4,
    brand: "Mancera",
    size: "Large (100–200ml)",
  },
];

export const womenProducts = [
  {
    id: 201,
    title: "Chanel Coco Mademoiselle EDP 100ml",
    details: "",
    price: 55000,
    image: ImgWomen1,
    brand: "Chanel",
    size: "Medium (50–99ml)",
  },
  {
    id: 202,
    title: "Escada Flor del Sol EDP 100ml",
    details: "",
    price: 28000,
    image: ImgWomen2,
    brand: "Escada",
    size: "Medium (50–99ml)",
  },
  {
    id: 203,
    title: "Mancera Roses Vanille EDP 120ml",
    details: "",
    price: 32000,
    image: ImgWomen3,
    brand: "Mancera",
    size: "Large (100–200ml)",
  },
  {
    id: 204,
    title: "Louis Vuitton Le Jour Se Lève EDP 100ml",
    details: "",
    price: 95000,
    image: ImgWomen4,
    brand: "Louis Vuitton",
    size: "Medium (50–99ml)",
  },
];

export const allProducts = [...menProducts, ...womenProducts];

export default allProducts;
