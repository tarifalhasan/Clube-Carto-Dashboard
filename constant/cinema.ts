import {
  avatarM,
  barbieM,
  jokerM,
  king_of_heavenM,
  martrixM,
  mulherM,
  noahM,
  pequenaM,
  synchronicM,
} from "@/assets/images";
import {
  cineartB,
  cinemarkB,
  cinepolisB,
  cineshowB,
  cinesystemB,
  grupocineB,
  kinoplexB,
  moviecomB,
  uciB,
} from "@/assets/images/brands";
import { sidebarNavigationType } from "@/interfaces";
import { StaticImageData } from "next/image";

const cinema_routes: sidebarNavigationType[] = [
  {
    name: "Listar categorias",
    href: "list-categories",
  },
  {
    name: "Listar marcas",
    href: "list-brands",
  },
  {
    name: "Listar cinemas",
    href: "list-cinemas",
  },
  {
    name: "Filmes",
    href: "films",
  },
  {
    name: "Ingressos",
    href: "ingressos",
  },
  {
    name: "Recentes",
    href: "recents",
  },
  {
    name: "Mais utilizados",
    href: "most-used",
  },
];

type listCategoriesType = {
  name: string;
  id: number;
};
const cinema_list_Categories_data: listCategoriesType[] = [
  {
    name: "Ação",
    id: 1,
  },
  {
    name: "Aventura",
    id: 2,
  },
  {
    name: "Animação ",
    id: 3,
  },
  {
    name: "Biografia  ",
    id: 4,
  },
  {
    name: "Comédia ",
    id: 5,
  },
  {
    name: "Documentário ",
    id: 6,
  },
  {
    name: "Drama ",
    id: 7,
  },
  {
    name: "Faroeste ",
    id: 8,
  },
  {
    name: "Fantasia ",
    id: 9,
  },
  {
    name: "Romance ",
    id: 10,
  },
  {
    name: "Ficção  científica ",
    id: 11,
  },
  {
    name: "Musical ",
    id: 12,
  },
  {
    name: "Policial  ",
    id: 13,
  },
  {
    name: "Fé e espiritualidade ",
    id: 14,
  },
];

type ListarMarcasDataType = {
  id: number;
  image: StaticImageData;
  bgColor: string;
};

const ListarMarcasData: ListarMarcasDataType[] = [
  {
    id: 1,
    image: cinemarkB,
    bgColor: "white",
  },
  {
    id: 2,
    image: kinoplexB,
    bgColor: "white",
  },
  {
    id: 3,
    image: cinesystemB,
    bgColor: "white",
  },
  {
    id: 4,
    image: cineshowB,
    bgColor: "white",
  },
  {
    id: 5,
    image: uciB,
    bgColor: "white",
  },
  {
    id: 6,
    image: cinepolisB,
    bgColor: "white",
  },
  {
    id: 7,
    image: grupocineB,
    bgColor: "white",
  },
  {
    id: 8,
    image: cineartB,
    bgColor: "white",
  },
  {
    id: 9,
    image: moviecomB,
    bgColor: "#003178",
  },
];

type ListarCinemasDataType = {
  id: number;
  image: StaticImageData;
  name: string;
  location: string;
};

const ListarCinemasData: ListarCinemasDataType[] = [
  {
    id: 1,
    image: cinemarkB,
    name: "Cinemark",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 2,
    image: kinoplexB,
    name: "Kinoplex",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 3,
    image: cinesystemB,
    name: "Cinesystem",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 4,
    image: cineshowB,
    name: "Cineshow",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 5,
    image: uciB,
    name: "UCI",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 6,
    image: cinepolisB,
    name: "Cinepolis",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 7,
    image: grupocineB,
    name: "Grupocine",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 8,
    image: cineartB,
    name: "Cineart",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
  {
    id: 9,
    image: moviecomB,
    name: "Moviecom",
    location: "Diamond Mall  I 10KM Av. Olegário Maciel, 1600",
  },
];

interface Movie {
  movieName?: string;
  description?: string;
  image: string | StaticImageData; // Replace 'any' with the correct type for the image imports.
  id: number | string;
}

interface FilmesListData {
  Emcartaz: Movie[];
  Estréias: Movie[];
  Embreve: Movie[];
}

const FilmesListData: FilmesListData = {
  Emcartaz: [
    {
      movieName: "King of heaven ",
      description: " De Ridley Scott",
      image: king_of_heavenM,
      id: 1,
    },
    {
      movieName: "Matrix",
      description: "De Lana Wachowiski e  Lilly Wachowski",
      image: martrixM,
      id: 2,
    },
    {
      movieName: "Noah ",
      description: "De Darren Aronofsky",
      image: noahM,
      id: 3,
    },
  ],
  Estréias: [
    {
      image: avatarM,
      id: 4,
    },
    {
      image: pequenaM,
      id: 5,
    },
    {
      image: mulherM,
      id: 6,
    },
  ],
  Embreve: [
    {
      image: jokerM,
      id: 7,
    },
    {
      image: synchronicM,
      id: 8,
    },
    {
      image: barbieM,
      id: 9,
    },
  ],
};

export {
  FilmesListData,
  ListarCinemasData,
  ListarMarcasData,
  cinema_list_Categories_data,
  cinema_routes,
};
