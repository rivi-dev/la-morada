import type { ImageMetadata } from "astro";
import img1 from "../assets/directions/como-llegar-1.jpg";
import img2 from "../assets/directions/como-llegar-2.jpg";
import img3 from "../assets/directions/como-llegar-3.jpg";
import img4 from "../assets/directions/como-llegar-4.jpg";

export interface DirectionCard {
  image: ImageMetadata;
  alt: string;
  bullets: string[];
  mapsUrl: string;
}

export const directionCards: DirectionCard[] = [
  {
    image: img1,
    alt: "Texto alt",
    bullets: [
      "La Morada está a solo 10 minutos de Chignahuapan.",
      "Sigue la ruta hasta la desviación de la carretera a Aquixtla.",
    ],
    mapsUrl: "https://maps.app.goo.gl/RNAgQiAoNcdCLMKg7?g_st=ic",
  },
  {
    image: img2,
    alt: "Texto alt",
    bullets: [
      "Una vez en la desviación, sigue la ruta trazada en el mapa.",
      "En 3.5 kilómetros, encontrarás una ruta hacia la derecha. ",
    ],
    mapsUrl: "https://maps.app.goo.gl/PDjAuNnUDGKkypJ27?g_st=ic",
  },
  {
    image: img3,
    alt: "Texto alt",
    bullets: [
      "Toma la ruta hacia la derecha, y continúa con la ruta trazada en el mapa.",
      "Como referencia, podrás ver la Capilla de Santa Rosa a tu derecha.",
    ],
    mapsUrl: "https://maps.app.goo.gl/PDjAuNnUDGKkypJ27?g_st=ic",
  },
  {
    image: img4,
    alt: "Texto alt",
    bullets: ["¡Listo! Llegaste a La Morada.", "¡Disfruta de tu estancia!"],
    mapsUrl: "https://maps.app.goo.gl/iguVMfqE7bvHkXGL8?g_st=ic",
  },
];
